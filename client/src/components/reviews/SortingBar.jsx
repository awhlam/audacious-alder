import React from 'react';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';

/**
* Enable sorting reviews by relevance, helpful, newest
**/

const SortingBar = ({ reviewMetaData }) => {
  if (reviewMetaData) {
    return (
      <h2>
        {calcAvgTotalReviews(reviewMetaData).reviews} reviews, sorted by &nbsp;
        <select>
          <option>relevance</option>
          <option>helpful</option>
          <option>newest</option>
        </select> ↓
      </h2>
    );
  } else {
    return null;
  }
};

export default SortingBar;
