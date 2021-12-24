import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Fix rendering before state is set
 * Calculate average star count
 * Style star count
 * Style characteristic bars
 * Show characteristic text (e.g., "Too small / Perfect / Too large")
 * Calculate % recommended on the backend
 * Enable filtering by # of stars
 */

function ReviewSummary() {
  const [product_id, setProductId] = useState(63609);
  const [reviewSummary, setReviewsSummary] = useState(() => {
    axios.get('/reviews/meta', {params: { product_id: product_id }})
      .then(res => {
        setReviewsSummary(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  if (reviewSummary) {
    return (
      <div className="box">
        <div>
          <p>3.5 stars</p>
          <p>
            {Math.round((reviewSummary.recommended.true / (parseInt(reviewSummary.recommended.true) + parseInt(reviewSummary.recommended.false))) * 100)}
            % of reviews recommend this product
          </p>
          <p>
            5 stars: {reviewSummary.ratings['5'] ? reviewSummary.ratings['5'] : '0'} reviews<br />
            4 stars: {reviewSummary.ratings['4'] ? reviewSummary.ratings['4'] : '0'} reviews<br />
            3 stars: {reviewSummary.ratings['3'] ? reviewSummary.ratings['3'] : '0'} reviews<br />
            2 stars: {reviewSummary.ratings['2'] ? reviewSummary.ratings['2'] : '0'} reviews<br />
            1 stars: {reviewSummary.ratings['1'] ? reviewSummary.ratings['1'] : '0'} reviews<br />
          </p>
        </div>
        <div>
          {Object.keys(reviewSummary.characteristics).map((key) => {
            return (
              <div>
                <h3>{key}</h3>
                <span>{parseFloat(reviewSummary.characteristics[key].value)} out of 5</span>
              </div>
            )
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}

export default ReviewSummary;
