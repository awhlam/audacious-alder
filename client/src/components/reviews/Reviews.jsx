import React from 'react';
import styled from 'styled-components'
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';

const ReviewsStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

const Reviews = ({ productId, reviewMetaData, reviews, fetchData }) => (
  <div>
    <h1>Ratings & Reviews</h1>
    <ReviewsStyle>
      <ReviewSummary
        reviewMetaData={reviewMetaData}
      />
      <ReviewList
        productId={productId}
        reviews={reviews}
        reviewMetaData={reviewMetaData}
        fetchData={fetchData}
      />
    </ReviewsStyle>
  </div>
)

export default Reviews;
