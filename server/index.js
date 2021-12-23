const express = require('express');
const path = require('path');
const api = require('./APICaller.js')

const app = express();
const port = 3000;
const publicPath = path.join(__dirname, '../client/dist');
app.use(express.static(publicPath));
app.use(express.json());

app.get('/test', (req, res) => {
  api.products.productsGET();
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening at http://localhost:${port}`);
});
