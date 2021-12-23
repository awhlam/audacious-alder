import React from 'react';
import reviewsMeta from '../../sample-data/reviewsMeta.js';

/**
 * Update to use sample data
 * Update to use send request to GET /reviews/meta
 * Enable filtering by # of stars
 */

const ReviewSummary = () => {
  return (
    <div className="box">
      <div>
        <p>3.5 stars</p>
        <p>
          {Math.round((reviewsMeta.recommended.true / (parseInt(reviewsMeta.recommended.true) + parseInt(reviewsMeta.recommended.false))) * 100)}
          % of reviews recommend this product
        </p>
        <p>
          5 stars: {reviewsMeta.ratings["5"] ? reviewsMeta.ratings["5"] : "0"} reviews<br />
          4 stars: {reviewsMeta.ratings["4"] ? reviewsMeta.ratings["4"] : "0"} reviews<br />
          3 stars: {reviewsMeta.ratings["3"] ? reviewsMeta.ratings["3"] : "0"} reviews<br />
          2 stars: {reviewsMeta.ratings["2"] ? reviewsMeta.ratings["2"] : "0"} reviews<br />
          1 stars: {reviewsMeta.ratings["1"] ? reviewsMeta.ratings["1"] : "0"} reviews<br />
        </p>
      </div>
      <div>
        <h3>Size</h3>
        {parseFloat(reviewsMeta.characteristics.Fit.value)} out of 5<br />
        Too small / Perfect / Too large
      </div>
      <div>
        <h3>Comfort</h3>
        {parseFloat(reviewsMeta.characteristics.Comfort.value)} out of 5<br />
        Poor / Perfect
      </div>
    </div>
  );
};

export default ReviewSummary;
