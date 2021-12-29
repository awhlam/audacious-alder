import React, { useState } from 'react';
import SortingBar from './SortingBar.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import AddReview from './AddReview.jsx';

/**
 * Create add a review form which sends a POST request
 * Enable "More Reviews" button to send a GET request to load more reviews
 * Get all reviews instead of hardcoded number
 */

const ReviewList = ({ reviews, reviewMetaData }) => {
  //******************************
  // STATE
  //******************************
  const [numReviews, setNumReviews] = useState(2);
  const [showModal, setShowModal] = useState(false);
  //******************************
  // HANDLERS
  //******************************
  const openModal = () => {
    setShowModal(prev => !prev);
  }
  const handleMoreReviews = () => {
    setNumReviews(prevNum => prevNum + 2);
  }
  //******************************
  // RENDER
  //******************************
  if (reviews) {
    return (
      <div className="box column">
        <SortingBar reviewMetaData={reviewMetaData} />
        {reviews.results.slice(0, numReviews).map((review, index) => (
          <ReviewEntry review={review} key={index} />
        ))}
        <p>
          <button type="submit" onClick={handleMoreReviews}>More Reviews</button>
          &nbsp;
          <button type="submit" onClick={openModal}>Add A Review +</button>
          <AddReview
            showModal={showModal}
            openModal={openModal}
          />
        </p>
      </div>
    );
  } else {
    return null;
  }
};

export default ReviewList;
