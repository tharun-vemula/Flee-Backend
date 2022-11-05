const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const bodyParser = require('body-parser');

const MONGO_URI =
  'mongodb://tarun:ktg2bFu8b3RMsKSf@cluster0-shard-00-00.iy4kk.mongodb.net:27017,cluster0-shard-00-01.iy4kk.mongodb.net:27017,cluster0-shard-00-02.iy4kk.mongodb.net:27017/sample?ssl=true&replicaSet=atlas-k2o103-shard-0&authSource=admin&retryWrites=true&w=majority';

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
const authRouter = require('./routes/auth');
const passRouter = require('./routes/pass');

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Math.floor(Math.random() * 1000) + '-' + file.originalname);
  },
});

app.use(multer({ storage: fileStorage }).single('file'));

app.use(authRouter);
app.use(passRouter);

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
