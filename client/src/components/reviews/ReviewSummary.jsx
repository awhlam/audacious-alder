import React from 'react';
import styled from 'styled-components'
import calcStarImg from '../shared/calcStarImg.jsx';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';
import calcPctRecommend from '../shared/calcPctRecommend.js';
import { ColumnContainer } from './Reviews.jsx';

/**
 * Style star bars (5 stars, 4 stars, ... 1 star)
 * Style characteristic bars (e.g., "Too small / Perfect / Too large")
 * Enable filtering by # of stars
 */

const handleClick = (e, ) => {
  e.preventDefault();
  console.log('clicked: ', e.target.innerHTML[0])
}

const ReviewSummary = ({ reviewMetaData }) => (
  <ColumnContainer>
    <div>
      <h1>
        {calcAvgTotalReviews(reviewMetaData).avgStars} &nbsp;
        {calcStarImg(calcAvgTotalReviews(reviewMetaData).avgStars)}
      </h1>
      <p>
        {calcPctRecommend(reviewMetaData)}% of reviews recommend this product
      </p>
      <p>
        <a href='#' onClick={handleClick}>5 stars</a> {reviewMetaData.ratings['5'] ? reviewMetaData.ratings['5'] : '0'} reviews<br />
        <a href='#' onClick={handleClick}>4 stars</a> {reviewMetaData.ratings['4'] ? reviewMetaData.ratings['4'] : '0'} reviews<br />
        <a href='#' onClick={handleClick}>3 stars</a> {reviewMetaData.ratings['3'] ? reviewMetaData.ratings['3'] : '0'} reviews<br />
        <a href='#' onClick={handleClick}>2 stars</a> {reviewMetaData.ratings['2'] ? reviewMetaData.ratings['2'] : '0'} reviews<br />
        <a href='#' onClick={handleClick}>1 star</a> {reviewMetaData.ratings['1'] ? reviewMetaData.ratings['1'] : '0'} reviews<br />
      </p>
    </div>
    <div>
      {Object.keys(reviewMetaData.characteristics).map((key) => {
        return (
          <div key={reviewMetaData.characteristics[key].id}>
            <h3>{key}</h3>
            <span>{calcStarImg(reviewMetaData.characteristics[key].value)}</span>
          </div>
        )
      })}
    </div>
  </ColumnContainer>
)

export default ReviewSummary;
