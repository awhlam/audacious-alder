const axios = require('axios')
const express = require('express')

//https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo
// sample product_id: 63617
const products = {
  productsGET: (axios.get('/products')
    .then()
    .catch()),
  productGET: (axios.get('/products/:product_id')
    .then()
    .catch()),
  productStylesGET: (axios.get('/products/:product_id/styles')
    .then()
    .catch()),
  productRelatedGET: (axios.get('/products/:product_id/related')
    .then()
    .catch()),
}

const reviews = {
  reviewsGET: (axios.get('/reviews')
    .then()
    .catch()),
  reviewsMetaGET: (axios.get('/reviews/meta')
    .then()
    .catch()),
  reviewsPOST: (axios.post('/reviews')
    .then()
    .catch()),
  reviewsHelpfulPUT: (axios.put('/reviews/:review_id/helpful')
    .then()
    .catch()),
  reviewsReportPUT: (axios.put('/reviews/:review_id/report')
    .then()
    .catch()),
}

const questions = {
  questionsGET: (axios.get('/qa/questions')
    .then()
    .catch()),
  answersGET: (axios.get('/qa/questions/:question_id/answers')
    .then()
    .catch()),
  questionPOST: (axios.post('/qa/questions')
    .then()
    .catch()),
  answersPOST: (axios.post('/qa/questions/:question_id/answers')
    .then()
    .catch()),
  questionsHelpfulPUT: (axios.put('/qa/questions/:question_id/helpful')
    .then()
    .catch()),
  questionsReportPUT: (axios.put('/qa/questions/:question_id/report')
    .then()
    catch()),
  answersHelpfulPUT: (axios.put('/qa/answers/:answer_id/helpful')
    .then()
    .catch()),
  answersReportPUT: (axios.put('/qa/answers/:answer_id/report')
    .then()
    .catch())
}

const cart = {
  cartGET: (axios.get('/cart')
    .then()
    .catch()),
  cartPOST: (axios.post('/cart')
    .then()
    .catch())
}

const interaction = {
  logInteractionPOST: (axios.post('/interactions')
    .then()
    .catch())
}

module.exports = {
  products
  reviews
  questions
  cart
  interaction
}