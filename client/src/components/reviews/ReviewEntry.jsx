import React from 'react';
import calcStarImg from '../shared/calcStarImg.jsx';
const moment = require('moment');

/**
 * Style response box
 * Enable Helpful link to send PUT request to /reviews/:review_id/helpful
 * Enable report link to send PUT request to /reviews/:review_id/report
 */

const ReviewEntry = ({ review }) => {
  let date = moment(review.date);

  return (
    <div className="box">
      <span>{calcStarImg(review.rating)}</span>
      <div className="reviewerNameDate">{review.reviewer_name}, {date.format('MMMM Do, YYYY')}</div>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <p>{review.recommend ? '✔ I recommend this product' : ''}</p>
      <p>{review.response ? review.response : ''}</p>
      Helpful? <a href="#">Yes</a> ({review.helpfulness}) | <a href="#">Report</a>
    </div>
  );
};

export default ReviewEntry;
