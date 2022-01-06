import React from 'react';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';
import styled from 'styled-components';

const DropContainer = styled.select`
  padding: 0.5vw 0.5vw;
  font-size: 1.5vh;
  font-family: 'Lato', sans-serif;
  text-align: center;
  background-color: #f7f7f7;
  &:hover {
    background-color: #ffd966
  }
`

const SortingBar = ({ reviewMetaData, reviews, reviewsSort, setReviewsSort, reviewsFilter }) => {
  let totalReviews = calcAvgTotalReviews(reviewMetaData).reviews;
  let excludedReviews = totalReviews - reviews.length;
  if (reviewsFilter !== 'none') {
    excludedReviews = reviewMetaData.ratings[reviewsFilter] - reviews.length || 0;
  }

  return (
    <h2>
      {reviews.length} reviews (excluding {excludedReviews} reported reviews), sorted by &nbsp;
      <DropContainer value={reviewsSort} onChange={ (e) => setReviewsSort(e.target.value)}>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
        <option value="relevant">relevance</option>
      </DropContainer> ↓
    </h2>
  );
}

export default SortingBar;
