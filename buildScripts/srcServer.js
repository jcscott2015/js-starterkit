import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackMiddleware from 'webpack-dev-middleware';

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();
const bundler = webpack(config);

app.use(webpackMiddleware(bundler, {
  // Dev middleware can't access config, so we provide publicPath
  publicPath: config.output.publicPath,
  contentBase: 'src',
  /*These settings suppress noisy webpack output so only errors are displayed to the console.*/
  noInfo: true,
  quiet: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  },

  // for other settings see
  // https://webpack.js.org/guides/development/#using-webpack-dev-middleware
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {
      "id": 1,
      "firstName": "Bob",
      "lastName": "Smith",
      "email": "bob@gmail.com"
    }, {
      "id": 2,
      "firstName": "Tammy",
      "lastName": "Norton",
      "email": "tnorton@yahoo.com"
    }, {
      "id": 3,
      "firstName": "Tina",
      "lastName": "Lee",
      "email": "lee.tina@hotmail.com"
    }
  ]);
});

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});