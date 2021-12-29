import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';

function Reviews({ reviewMetaData, reviews }) {
  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <div className="reviews">
        <ReviewSummary
          reviewMetaData={reviewMetaData}
        />
        <ReviewList
          reviews={reviews}
          reviewMetaData={reviewMetaData}
        />
      </div>
    </div>
  );
}

export default Reviews;
