import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import reviews from '../../sample-data/reviews.js';

const ReviewList = () => {
  return (
    <div className='box'>
      <h2>{reviews.results.length} reviews, sorted by <a href="#">relevance ↓</a></h2>
      {reviews.results.map(review => (
        <ReviewEntry review={review}/>
      ))}
    </div>
  );
};

export default ReviewList;
