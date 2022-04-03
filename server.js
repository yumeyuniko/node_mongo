require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const foodRouter = require('./routes/foodRoutes');
app.use(foodRouter);

app.listen(3000, () => {
  console.log('server is running');
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB success');
  })
  .catch((err) => console.log(err));
