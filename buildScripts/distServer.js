import express from 'express';
import path from 'path';
import compression from 'compression';
import { chalkError, chalkProcessing } from './chalkConfig';

/*eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, 'localhost', err => {
  if (err) {
    console.error(chalkError(err));
    return;
  }

  console.log(chalkProcessing(`Listening at http://localhost:${port}`));
});
