import React from 'react';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';
import fetchReviews from '../shared/fetchReviews.js';
/**
* Enable sorting reviews by relevance, helpful, newest
**/

const SortingBar = ({ productId, reviewMetaData, setReviews }) => {
  const handleChange = (e, productId) => {
    console.log('clicked', e.target.value);
    fetchReviews(productId, e.target.value)
      .then(res => setReviews(res.data));
  }

  return (
    <h2>
      {calcAvgTotalReviews(reviewMetaData).reviews} reviews, sorted by &nbsp;
      <select onChange={ (e) => handleChange(e, productId)}>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
        <option value="relevant">relevance</option>
      </select> ↓
    </h2>
  );
}

export default SortingBar;
