import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';

const Reviews = () => {
  return (
    <div>
      <h1>Ratings & Reviews</h1>
      <ReviewSummary />
      <ReviewList />
    </div>
  );
};

export default Reviews;
