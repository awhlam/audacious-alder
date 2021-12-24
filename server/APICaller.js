/* eslint-disable camelcase */
const axios = require('axios');
// const path = require('path');
// const express = require('express');
const config = require('../config');

const options = { Authorization: config.token };
const server = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
// sample product_id: 63617

const products = {
  productsGET: () => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products', { headers: options })
      .then((testData) => { console.log(testData.data); })
      .catch((error) => { console.log(error, 'ERROR'); });
  },
  productGET: (product_id) => {
    axios.get(`/products/${product_id}`, { headers: options })
      .then()
      .catch();
  },
  productStylesGET: (product_id) => {
    axios.get(`/products/${product_id}/styles`, { headers: options })
      .then()
      .catch();
  },
  productRelatedGET: (product_id) => {
    axios.get(`/products/${product_id}/related`, { headers: options })
      .then()
      .catch();
  },
};

const reviews = {
  reviewsGET: () => {
    axios.get(server + '/reviews', { headers: options })
      .then()
      .catch();
  },
  reviewsMetaGET: (req, res) => {
    let {product_id} = req.query;
    axios.get(server + '/reviews/meta', { headers: options, params: { product_id: product_id } })
      .then((api) => {
        res.send(api.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  reviewsPOST: (review) => {
    axios.post(server + '/reviews', { headers: options })
      .then()
      .catch();
  },
  reviewsHelpfulPUT: (review_id) => {
    axios.put(server + `/reviews/${review_id}/helpful`, { headers: options })
      .then()
      .catch();
  },
  reviewsReportPUT: (review_id) => {
    axios.put(server + `/reviews/${review_id}/report`, { headers: options })
      .then()
      .catch();
  },
};

const questions = {
  questionsGET: () => {
    axios.get('/qa/questions', { headers: options })
      .then()
      .catch();
  },
  answersGET: (question_id) => {
    axios.get(`/qa/questions/${question_id}/answers`, { headers: options })
      .then()
      .catch();
  },
  questionPOST: (question) => {
    axios.post('/qa/questions', { headers: options })
      .then()
      .catch();
  },
  answersPOST: (question_id, answer) => {
    axios.post(`/qa/questions/${question_id}/answers`, { headers: options })
      .then()
      .catch();
  },
  questionsHelpfulPUT: (question_id) => {
    axios.put(`/qa/questions/${question_id}/helpful`, { headers: options })
      .then()
      .catch();
  },
  questionsReportPUT: (question_id) => {
    axios.put(`/qa/questions/${question_id}/report`, { headers: options })
      .then()
      .catch();
  },
  answersHelpfulPUT: (answer_id) => {
    axios.put(`/qa/answers/${answer_id}/helpful`, { headers: options })
      .then()
      .catch();
  },
  answersReportPUT: (answer_id) => {
    axios.put(`/qa/answers/${answer_id}/report`, { headers: options })
      .then()
      .catch();
  },
};

const cart = {
  cartGET: () => {
    axios.get('/cart', { headers: options })
      .then()
      .catch();
  },
  cartPOST: (item) => {
    axios.post('/cart', { headers: options })
      .then()
      .catch();
  },
};

const interaction = {
  logInteractionPOST: (interaction) => {
    axios.post('/interactions', { headers: options })
      .then()
      .catch();
  },
};

module.exports = {
  products,
  reviews,
  questions,
  cart,
  interaction,
};
