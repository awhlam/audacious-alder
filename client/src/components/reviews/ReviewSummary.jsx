import React from 'react';
import { ColumnContainer, FilterButton, TableStyle, RowStyle, CellStyle } from './ReviewSummary.styles';
import calcStarImg from '../shared/calcStarImg.jsx';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews';
import calcPctRecommend from '../shared/calcPctRecommend';

/**
 * Style star bars (5 stars, 4 stars, ... 1 star)
 * Style characteristic bars (e.g., "Too small / Perfect / Too large")
 */

const ReviewSummary = ({ reviewMetaData, reviewsFilter, setReviewsFilter }) => {
  const handleClick = (e) => {
    e.preventDefault();
    let clickedFilter = parseInt(e.target.innerHTML[0], 10);
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
            <RowStyle active={reviewsFilter === 5}>
              <CellStyle><FilterButton onClick={handleClick}>5 stars</FilterButton></CellStyle>
              <CellStyle>{reviewMetaData.ratings['5'] ? reviewMetaData.ratings['5'] : '0'} reviews</CellStyle>
            </RowStyle>
            <RowStyle active={reviewsFilter === 4}>
              <CellStyle><FilterButton onClick={handleClick}>4 stars</FilterButton></CellStyle>
              <CellStyle>{reviewMetaData.ratings['4'] ? reviewMetaData.ratings['4'] : '0'} reviews</CellStyle>
            </RowStyle>
            <RowStyle active={reviewsFilter === 3}>
              <CellStyle><FilterButton onClick={handleClick}>3 stars</FilterButton></CellStyle>
              <CellStyle>{reviewMetaData.ratings['3'] ? reviewMetaData.ratings['3'] : '0'} reviews</CellStyle>
            </RowStyle>
            <RowStyle active={reviewsFilter === 2}>
              <CellStyle><FilterButton onClick={handleClick}>2 stars</FilterButton></CellStyle>
              <CellStyle>{reviewMetaData.ratings['2'] ? reviewMetaData.ratings['2'] : '0'} reviews</CellStyle>
            </RowStyle>
            <RowStyle active={reviewsFilter === 1}>
              <CellStyle><FilterButton onClick={handleClick}>1 star</FilterButton></CellStyle>
              <CellStyle>{reviewMetaData.ratings['1'] ? reviewMetaData.ratings['1'] : '0'} reviews</CellStyle>
            </RowStyle>
          </tbody>
        </TableStyle>
      </div>

      <div>
        {Object.keys(reviewMetaData.characteristics).map((key) => (
          <div key={reviewMetaData.characteristics[key].id}>
            <h3>{key}</h3>
            <span>{calcStarImg(reviewMetaData.characteristics[key].value)}</span>
          </div>
        ))}
      </div>
    </ColumnContainer>
  );
};

export default ReviewSummary;
