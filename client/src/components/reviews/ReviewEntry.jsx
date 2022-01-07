import React from 'react';
import axios from 'axios';
import { ReviewerNameDate, ReviewEntryStyle } from './ReviewEntry.styles';
import calcStarImg from '../shared/calcStarImg.jsx';
import fetchReviews from '../shared/fetchReviews';

const moment = require('moment');

/**
 * TODO: Style response box
 */

const ReviewEntry = ({
  review,
  productId,
  reviewsSort,
  setReviews
}) => {
  const date = moment(review.date);
  // ******************************
  // HANDLERS
  // ******************************
  const handleClick = (e, review_id, type) => {
    e.preventDefault();
    axios.put(`/reviews/${type}`, { review_id: review_id })
      .then((res) => {
        alert(`You marked this review as ${type}`);
        fetchReviews(productId, reviewsSort)
          .then((res) => { setReviews(res.data.results); });
      })
      .catch((err) => { console.log(err); });
  };
  // ******************************
  // RENDER
  // ******************************
  return (
    <ReviewEntryStyle>
      <span>{calcStarImg(review.rating)}</span>
      <ReviewerNameDate>
        {review.reviewer_name}, {date.format('MMMM Do, YYYY')}
      </ReviewerNameDate>
      <h3>{review.summary}</h3>
      <p>{review.body}</p>
      <p>{review.recommend ? '✔ I recommend this product' : ''}</p>
      <p>{review.response ? review.response : ''}</p>
      Helpful? <a href='#' onClick={(e) => handleClick(e, review.review_id, 'helpful')}>Yes</a> ({review.helpfulness})
      | <a href="#" onClick={(e) => handleClick(e, review.review_id, 'report')}>Report</a>
    </ReviewEntryStyle>
  );
};

export default ReviewEntry;
