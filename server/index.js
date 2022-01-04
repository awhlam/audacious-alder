const express = require('express');
const path = require('path');
const api = require('./APICaller');

const app = express();
const port = 3000;
const publicPath = path.join(__dirname, '../client/dist');
app.use(express.static(publicPath));
app.use(express.json());

// Overview
app.get('/products', api.products.productGET);
app.get('/products/styles', api.products.productStylesGET);

// Questions
app.get('/questions', api.questions.questionsGET);
app.get('/questions', api.questions.questionsGET);
app.get('/questions/answers', api.questions.answersGET);
app.post('/questions', api.questions.questionPOST);
app.post('/questions/answers', api.questions.answersPOST);

// Related
app.get('/related', api.products.productRelatedGET);
app.get('/related/products', api.products.multiProductGET);
app.get('/related/products/styles', api.products.mulitStylesGET);
app.get('/related/products/reviews/meta', api.products.multiReviewsMetaGET);

// Reviews
app.get('/reviews', api.reviews.reviewsGET);
app.get('/reviews/meta', api.reviews.reviewsMetaGET);
app.post('/reviews', api.reviews.reviewsPOST);

// Cart
app.get('/cart', api.cart.cartGET);
app.post('/cart', api.cart.cartPOST);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening at http://localhost:${port}`);
});
