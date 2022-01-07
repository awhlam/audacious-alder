import React from 'react';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews';
import DropContainer from './SortingBar.style';

const SortingBar = ({
  reviewMetaData,
  reviews,
  reviewsSort,
  setReviewsSort,
  reviewsFilter,
}) => {
  const totalReviews = calcAvgTotalReviews(reviewMetaData).reviews;
  let excludedReviews = totalReviews - reviews.length;
  if (reviewsFilter !== 'none') {
    excludedReviews = reviewMetaData.ratings[reviewsFilter] - reviews.length || 0;
  }

  return (
    <h2>
      {reviews.length} reviews (excluding {excludedReviews} reported reviews), sorted by &nbsp;
      <DropContainer value={reviewsSort} onChange={(e) => setReviewsSort(e.target.value)}>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
        <option value="relevant">relevance</option>
      </DropContainer> ↓
    </h2>
  );
};

export default SortingBar;
