import React from 'react';
import Overview from './overview/Overview.jsx';
import Related from './related/Related.jsx';
import Reviews from './reviews/Reviews.jsx';
import Questions from './questions/Questions.jsx';
import products from '../sample-data/products.js';

export var App = function () {
  return (
    <div>
      <h1>Audacious Alder Clothing</h1>
      <Overview product={products[0]} />
      <Related />
      <Reviews />
      <Questions />
    </div>
  );
};

export default App;
