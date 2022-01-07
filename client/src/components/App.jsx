import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './overview/Overview.jsx';
import Related from './related/Related.jsx';
import Reviews from './reviews/Reviews.jsx';
import { Questions } from './questions/Questions.jsx';
import fetchReviews from './shared/fetchReviews';
import filterReviews from './shared/filterReviews';

const App = () => {
  // ******************************
  // STATE
  // ******************************
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [productId, setProductId] = useState(63609);

  const [product, setProduct] = useState({});
  const [productStyle, setProductStyle] = useState({});

  const [reviewMetaData, setReviewMetaData] = useState({});
  const [reviews, setReviews] = useState({});
  const [reviewsSort, setReviewsSort] = useState('helpful');
  const [reviewsFilter, setReviewsFilter] = useState('none');
  // ******************************
  // Data fetching
  // ******************************
  const fetchData = (id = 63609) => {
    const getProducts = axios.get('/products', { params: { product_id: id } })
      .then((res) => { setProduct(res.data); });
    const getStyles = axios.get('/products/styles', { params: { product_id: id } })
      .then((res) => { setProductStyle(res.data); });
    const getReviewsMeta = axios.get('/reviews/meta', { params: { product_id: id } })
      .then((res) => { setReviewMetaData(res.data); });
    const getReviews = fetchReviews(id, reviewsSort)
      .then((res) => { setReviews(res.data.results); });

    const promises = [getProducts, getStyles, getReviewsMeta, getReviews];
    Promise.all(promises)
      .then(() => { setIsError(false); })
      .then(() => { setIsLoading(false); })
      .then(() => { setProductId(id); })
      .catch((err) => {
        setIsError(true);
        console.log(err);
      });
  };

  // If productId changes, fetch all data for new product
  useEffect(() => {
    const url = new URL(document.URL);
    const id = parseInt(url.search.split('=')[1], 10);
    if (id) {
      fetchData(id);
    } else {
      fetchData(productId);
    }
    // reset reviews sorting and filtering
    setReviewsSort('helpful');
    setReviewsFilter('none');
  }, [productId]);

  // If review sorting/filtering method changes, fetch reviews
  useEffect(() => {
    fetchReviews(productId, reviewsSort)
      .then((res) => { setReviews(filterReviews(res.data.results, reviewsFilter)); });
  }, [reviewsSort, reviewsFilter]);
  // ******************************
  // Render
  // ******************************
  if (isError) { return <span>❌ Error - Too many requests or invalid product. Please try again.</span>; }
  if (isLoading) { return <img src="./images/loading.gif" alt="Loading" />; }
  return (
    <div>
      <h1 className="title">Audacious Alder</h1>
      <a name="top" />
      <Overview
        product={product}
        productStyle={productStyle}
        reviewMetaData={reviewMetaData}
      />
      <Related
        productId={productId}
        setProductId={setProductId}
        currentProduct={product}
      />
      <Reviews
        productId={productId}
        reviewMetaData={reviewMetaData}
        reviews={reviews}
        setReviews={setReviews}
        reviewsSort={reviewsSort}
        setReviewsSort={setReviewsSort}
        reviewsFilter={reviewsFilter}
        setReviewsFilter={setReviewsFilter}
      />
      <Questions
        productId={productId}
      />
    </div>
  );
};

export default App;
