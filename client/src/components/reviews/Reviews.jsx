import React from 'react';
import styled from 'styled-components'
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background: #45a679;
  border: 2px solid;
  border-radius: 15px;
  margin: 15px;
  padding: 15px;
`

const Reviews = ({ productId, reviewMetaData, reviewsFilter, setReviewsFilter, reviews, setReviews, reviewsSort, setReviewsSort }) => (
  <div>
    <h1>Ratings & Reviews</h1>
    <ReviewsContainer>
      <ReviewSummary
        reviewMetaData={reviewMetaData}
        reviewsFilter={reviewsFilter}
        setReviewsFilter={setReviewsFilter}
      />
      <ReviewList
        productId={productId}
        reviews={reviews}
        reviewMetaData={reviewMetaData}
        setReviews={setReviews}
        reviewsSort={reviewsSort}
        setReviewsSort={setReviewsSort}
        reviewsFilter={reviewsFilter}
      />
    </ReviewsContainer>
  </div>
)

export default Reviews;
