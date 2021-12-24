import React, { useState } from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';

function Reviews() {
  const [product_id, setProductId] = useState(63609);

  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <ReviewSummary product_id={product_id} />
      <ReviewList product_id={product_id} />
    </div>
  );
};

export default Reviews;
