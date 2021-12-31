import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';

const Reviews = ({ productId, reviewMetaData, reviews, fetchData }) => (
  <div>
    <h1>Ratings & Reviews</h1>
    <div className="reviews">
      <ReviewSummary
        reviewMetaData={reviewMetaData}
      />
      <ReviewList
        productId={productId}
        reviews={reviews}
        reviewMetaData={reviewMetaData}
        fetchData={fetchData}
      />
    </div>
  </div>
)

export default Reviews;
