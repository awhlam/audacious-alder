import React from 'react';
import styled from 'styled-components'
import ReviewSummary from './ReviewSummary.jsx';
import ReviewList from './ReviewList.jsx';

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ColumnContainer = styled.div`
  border: 1px solid;
  padding: 15px;
  margin: 5px;
  flex-grow: 1;
`

const Reviews = ({ productId, reviewMetaData, reviews, fetchData }) => (
  <div>
    <h1>Ratings & Reviews</h1>
    <ReviewsContainer>
      <ReviewSummary
        reviewMetaData={reviewMetaData}
      />
      <ReviewList
        productId={productId}
        reviews={reviews}
        reviewMetaData={reviewMetaData}
        fetchData={fetchData}
      />
    </ReviewsContainer>
  </div>
)

export default Reviews;
