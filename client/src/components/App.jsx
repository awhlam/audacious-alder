import React, { useState, useEffect } from 'react';
import Overview from './overview/Overview.jsx';
import Related from './related/Related.jsx';
import Reviews from './reviews/Reviews.jsx';
import Questions from './questions/Questions.jsx';
import products from '../sample-data/products.js';
import axios from 'axios';

export const App = () => {
  //******************************
  // STATE
  //******************************
  const [product_id, setProductId] = useState(63609);
  const [productStyle, setProductStyle] = useState(63609)
  const [reviewMetaData, setReviewMetaData] = useState();
  const [reviews, setReviews] = useState();

  const fetchData = () => {
    axios.get('/products', {params: {product_id: product_id}})
    .then((res) => { setProductId(res.data);})
    .catch((err) => { console.log(err); })
    axios.get('/products/styles', { params: { product_id: product_id}})
      .then((response) => { setProductStyle(response.data); } )
      .catch((error) => { console.log(error); })
    axios.get('/reviews/meta', {params: { product_id: product_id }})
      .then(res => { setReviewMetaData(res.data); })
      .catch(err => { console.log(err); });
    axios.get('/reviews', {params: { product_id: product_id, count: 100 }})
      .then(res => { setReviews(res.data); })
      .catch(err => { console.log(err); });
  }


  useEffect(() => {
    fetchData();
    console.log('fetching data');
  }, [])
  //******************************
  // Render
  //******************************
  if (!reviewMetaData || !reviews) {
    return null
  }
  return (
    <div>
      <h1>Audacious Alder Clothing</h1>
      <Overview
        product={product_id}
        productStyle={productStyle}
        reviewMetaData={reviewMetaData}
      />
      <Related />
      <Reviews
        reviews={reviews}
        reviewMetaData={reviewMetaData}
      />
      <Questions />
    </div>
  )
}

export default App;
