import React, { useState } from 'react';
import styled from 'styled-components'
import SortingBar from './SortingBar.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import AddReview from './AddReview.jsx';

const ColumnContainer = styled.div`
  border: 2px solid;
  border-radius: 15px;
  padding: 25px;
  margin: 15px;
  flex: 3;
  background: white;
`

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
        <button type="submit" onClick={handleMoreReviews}>More Reviews</button>
        &nbsp;
        <button type="submit" onClick={openModal}>Add A Review +</button>
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
