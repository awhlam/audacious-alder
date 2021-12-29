import React, { useState } from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';
import axios from 'axios';

function Reviews() {
  //******************************
  // STATE
  //******************************
  const [product_id, setProductId] = useState(63609);
  const [reviewMetaData, setReviewMetaData] = useState(() => {
    axios.get('/reviews/meta', {params: { product_id: product_id }})
      .then(res => {
        setReviewMetaData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <div className="reviews">
        <ReviewSummary
          product_id={product_id}
          reviewMetaData={reviewMetaData}
        />
        <ReviewList
          product_id={product_id}
          reviewMetaData={reviewMetaData}
        />
      </div>
    </div>
  );
};

export default Reviews;
