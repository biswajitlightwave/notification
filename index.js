const express = require('express');
const mongoose = require('mongoose');

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/hospital-management-system');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(express.json());
// initialize routes
app.use('/api', require('./routes/api'));
// app.use('/api', require('./routes/auth'));

// error handling middleware
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(422).send({ error: res.statusCode });
});

const url = 'mongodb://localhost/27017/';
const MongoClient = require('mongodb').MongoClient;
var db;
MongoClient.connect(url, (err, client) => {
  if (err) {
    return console.log(err);
  } else {
    console.log('Connection established to', url);
    db = client.db('hospital-management-system');
    app.listen(4004, () => {
      console.log('listening on 4004');
    });
  }
});

app.get('/quotes', (req, res) => {
  db.collection('add-specializations').find({}, { projection: { _id: 0, specialization: 1 } }).toArray(function (err, doc) {
      // res.send(Object.values(docum));
      res.json(doc);
    });
});

// listen for requests
app.listen(process.env.port || 4000, function () {
  console.log('Ready to Go!');
});
