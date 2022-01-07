import React from 'react';
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewsContainer from './Reviews.styles';

const Reviews = ({
  productId,
  reviewMetaData,
  reviewsFilter,
  setReviewsFilter,
  reviews,
  setReviews,
  reviewsSort,
  setReviewsSort,
}) => (
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
);

export default Reviews;
