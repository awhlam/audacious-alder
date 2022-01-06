import React, { useState } from 'react';
import { ColumnContainer, ButtonContainer } from './ReviewList.styles.js';
import SortingBar from './SortingBar.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import AddReview from './AddReview.jsx';

const ReviewList = ({ productId, reviews, reviewMetaData, setReviews, reviewsSort, setReviewsSort, reviewsFilter }) => {
  //******************************
  // STATE
  //******************************
  const [numReviews, setNumReviews] = useState(2);
  const [showModal, setShowModal] = useState(false);
  //******************************
  // HANDLERS
  //******************************
  const openModal = () => { setShowModal((prev) => !prev); };
  const handleMoreReviews = () => { setNumReviews((prevNum) => prevNum + 2); };
  //******************************
  // RENDER
  //******************************
  return (
    <ColumnContainer>
      <SortingBar
        reviews={reviews}
        setReviews={setReviews}
        reviewMetaData={reviewMetaData}
        productId={productId}
        reviewsSort={reviewsSort}
        setReviewsSort={setReviewsSort}
        reviewsFilter={reviewsFilter}
      />
      {reviews.slice(0, numReviews).map((review, index) => (
        <ReviewEntry
          review={review}
          key={review.review_id}
          productId={productId}
          reviewsSort={reviewsSort}
          setReviews={setReviews}
        />
      ))}
      <p>
        <ButtonContainer type="submit" onClick={handleMoreReviews}>↓ More Reviews</ButtonContainer>
        &nbsp;
        <ButtonContainer type="submit" onClick={openModal}>+ Add a Review</ButtonContainer>
      </p>
      <AddReview
        productId={productId}
        showModal={showModal}
        openModal={openModal}
        reviewsSort={reviewsSort}
        setReviews={setReviews}
      />
    </ColumnContainer>
  );
};

export default ReviewList;
