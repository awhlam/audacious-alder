import React from 'react';
import { ColumnContainer, TableStyle, TableRowStyle } from './ReviewSummary.styles.js';
import calcStarImg from '../shared/calcStarImg.jsx';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';
import calcPctRecommend from '../shared/calcPctRecommend.js';

/**
 * Style star bars (5 stars, 4 stars, ... 1 star)
 * Style characteristic bars (e.g., "Too small / Perfect / Too large")
 */

const ReviewSummary = ({ reviewMetaData, reviewsFilter, setReviewsFilter }) => {
  const handleClick = (e) => {
    e.preventDefault();
    let clickedFilter = parseInt(e.target.innerHTML[0]);
    if (reviewsFilter === clickedFilter) { clickedFilter = 'none'; }
    setReviewsFilter(clickedFilter);
  };

  return (
    <ColumnContainer>
      <div>
        <h1>
          {calcAvgTotalReviews(reviewMetaData).avgStars} &nbsp;
          {calcStarImg(calcAvgTotalReviews(reviewMetaData).avgStars)}
        </h1>
        <p>
          {calcPctRecommend(reviewMetaData)}% of reviews recommend this product
        </p>
        <TableStyle>
          <tbody>
            <TableRowStyle>
              <td><a href='#' onClick={handleClick}>5 stars</a></td>
              <td>{reviewMetaData.ratings['5'] ? reviewMetaData.ratings['5'] : '0'} reviews</td>
            </TableRowStyle>
            <TableRowStyle>
              <td><a href='#' onClick={handleClick}>4 stars</a></td>
              <td>{reviewMetaData.ratings['4'] ? reviewMetaData.ratings['4'] : '0'} reviews</td>
            </TableRowStyle>
            <TableRowStyle>
              <td><a href='#' onClick={handleClick}>3 stars</a></td>
              <td>{reviewMetaData.ratings['3'] ? reviewMetaData.ratings['3'] : '0'} reviews</td>
            </TableRowStyle>
            <TableRowStyle>
              <td><a href='#' onClick={handleClick}>2 stars</a></td>
              <td>{reviewMetaData.ratings['2'] ? reviewMetaData.ratings['2'] : '0'} reviews</td>
            </TableRowStyle>
            <TableRowStyle>
              <td><a href='#' onClick={handleClick}>1 star</a></td>
              <td>{reviewMetaData.ratings['1'] ? reviewMetaData.ratings['1'] : '0'} reviews</td>
            </TableRowStyle>
            <TableRowStyle>
              <td>Current Filter</td>
              <td>{reviewsFilter}</td>
            </TableRowStyle>
          </tbody>
        </TableStyle>
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
}

export default ReviewSummary;
