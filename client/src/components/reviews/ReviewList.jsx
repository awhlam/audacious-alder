import React, { useState } from 'react';
import axios from 'axios';
import ReviewEntry from './ReviewEntry.jsx';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';

/**
 * Create add a review form which sends a POST request
 * Enable "More Reviews" button to send a GET request to load more reviews
 * Enable sorting reviews by relevance, date, etc
 * Get all reviews instead of hardcoded number
 */

const ReviewList = ({ product_id, reviewMetaData }) => {
  //******************************
  // STATE
  //******************************
  const [numReviews, setNumReviews] = useState(2);
  const [reviews, setReviews] = useState(() => {
    axios.get('/reviews', {params: { product_id: product_id, count: 100 }})
      .then(res => {
        setReviews(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  });
  //******************************
  // HANDLERS
  //******************************
  const handleMoreReviews = () => {
    setNumReviews(prevNum => prevNum + 2);
  }
  //******************************
  // RENDER
  //******************************
  if (reviews) {
    return (
      <div className="box column">
        <h2>
        {calcAvgTotalReviews(reviewMetaData).reviews } reviews, sorted by <a href="#">relevance ↓</a>
        </h2>
        {reviews.results.slice(0, numReviews).map((review) => (
          <ReviewEntry review={review} />
        ))}
        <p>
          <button type="submit" onClick={handleMoreReviews}>More Reviews</button>
          &nbsp;
          <button type="submit">Add A Review +</button>
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default ReviewList;
