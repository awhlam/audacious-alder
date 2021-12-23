import React from 'react';
const moment = require('moment');

const ReviewEntry = ({review}) => {
  let date = moment(review.date);

  return (
    <div className="box">
      {review.rating} stars | {review.reviewer_name}, {date.format('MMMM Do, YYYY')}
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <p>{review.recommend ? '✔ I recommend this product' : ''}</p>
      <p>{review.response ? review.response : ''}</p>
      Helpful? <a href="#">Yes</a> ({review.helpfulness}) | <a href="#">Report</a>
    </div>
  );
};

export default ReviewEntry;
