const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const MONGO_URI =
  'mongodb://tarun:ktg2bFu8b3RMsKSf@cluster0-shard-00-00.iy4kk.mongodb.net:27017,cluster0-shard-00-01.iy4kk.mongodb.net:27017,cluster0-shard-00-02.iy4kk.mongodb.net:27017/sample?ssl=true&replicaSet=atlas-k2o103-shard-0&authSource=admin&retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;

const authRouter = require('./routes/auth');
const passRouter = require('./routes/pass');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(authRouter);
app.use(passRouter);

mongoose
  .connect(MONGO_URI)
  .then((result) => {
    app.listen(PORT, '172.16.221.156', (req, res) => {
      console.log('Running');
    });
  })
  .catch((err) => {
    console.log(err);
  });
