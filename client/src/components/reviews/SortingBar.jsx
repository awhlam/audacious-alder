import React from 'react';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';

const SortingBar = ({ reviewMetaData, reviews, setReviewsSort, reviewsFilter }) => {
  let totalReviews = calcAvgTotalReviews(reviewMetaData).reviews;
  let excludedReviews = totalReviews - reviews.length;
  if (reviewsFilter !== 'none') {
    excludedReviews = reviewMetaData.ratings[reviewsFilter] - reviews.length || 0;
  }

  return (
    <h2>
      {reviews.length} reviews (excluding {excludedReviews} reported reviews), sorted by &nbsp;
      <select onChange={ (e) => setReviewsSort(e.target.value)}>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
        <option value="relevant">relevance</option>
      </select> ↓
    </h2>
  );
}

export default SortingBar;
