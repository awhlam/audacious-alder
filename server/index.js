const express = require('express');
const path = require('path');
const api = require('./APICaller');

const app = express();
const port = 3000;
const publicPath = path.join(__dirname, '../client/dist');
app.use(express.static(publicPath));
app.use(express.json());

app.get('/test', (req, res) => {
  api.products.productsGET();
});

// Reviews
app.get('/reviews', api.reviews.reviewsGET);
app.get('/reviews/meta', api.reviews.reviewsMetaGET);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening at http://localhost:${port}`);
});
