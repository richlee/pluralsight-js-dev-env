import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
  }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
  // hard coded for simplicity
  res.json([
    {"id": 1, "firstName":"Bob","lastname":"Smith","email":"bob@gmail.com"},
    {"id": 2, "firstName":"Tammy","lastname":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3, "firstName":"Tina","lastname":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
