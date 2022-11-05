const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MONGO_URI =
  'mongodb://tarun:ktg2bFu8b3RMsKSf@cluster0-shard-00-00.iy4kk.mongodb.net:27017,cluster0-shard-00-01.iy4kk.mongodb.net:27017,cluster0-shard-00-02.iy4kk.mongodb.net:27017/sample?ssl=true&replicaSet=atlas-k2o103-shard-0&authSource=admin&retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;


const authRouter = require('./routes/auth');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(authRouter);
// app.use(passRouter);

mongoose
  .connect(MONGO_URI)
  .then((result) => {
    app.listen(PORT, (req, res) => {
      console.log('Running');
    });
  })
  .catch((err) => {
    console.log(err);
  });