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
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = (id = 63609) => {
    const getProducts = axios.get('/products', {params: {product_id: id}})
      .then((res) => { setProductId(res.data); })
    const getStyles = axios.get('/products/styles', { params: { product_id: id}})
      .then((response) => { setProductStyle(response.data); } )
    const getReviewsMeta = axios.get('/reviews/meta', {params: { product_id: id }})
      .then(res => { setReviewMetaData(res.data); })
    const getReviews = axios.get('/reviews', {params: { product_id: id, count: 10000 }})
      .then(res => { setReviews(res.data); })
    const promises = [getProducts, getStyles, getReviewsMeta, getReviews];
    Promise.all(promises)
      .then(() => { setIsLoading(false); })
      .catch((err) => {'Something went wrong: ', console.log(err) });
  }

  useEffect(() => {
    const url = new URL (document.URL)
    const id = url.search.split('=')[1]
    fetchData(id);
    console.log('fetching data');
  }, [])

  //******************************
  // Render
  //******************************
  if (isLoading) { return null }
  return (
    <div>
      <h1 className="title">Audacious Alder</h1>
      <Overview
        product={product_id}
        productStyle={productStyle}
        reviewMetaData={reviewMetaData}
      />
      <Related
        product={product_id}
        setProductId={setProductId}
      />
      <Reviews
        product_id={product_id}
        reviews={reviews}
        reviewMetaData={reviewMetaData}
      />
      <Questions />
    </div>
  )
}

export default App;
