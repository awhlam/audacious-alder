/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import calcStarImg from '../shared/calcStarImg.jsx';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';

// Color styling for category words
const GrayCategoryTitle = styled.a`
color: gray
`;

// Card styling

const RelatedProductsCard = (props) => {
  // ***********
  // State
  // ***********
  const [backupImage, setBackupImage] = useState(false);

  // Calculate avg review
  let averageReview = calcAvgTotalReviews(props.relatedReviewsMeta).avgStars;

  // ***********
  // Func for rendering back up image
  // ***********
  const backupImgRender = (img) => {
    if (!img) {
      return '../../../images/small/placeHolder.png';
    } else {
      return img;
    }
  }

  // ***********
  // Func for rendering back up image
  // ***********
  const backupStarRender = (avgReview) => {
    if (isNaN(avgReview)) {
      return 3.25;
    } else {
      return avgReview;
    }
  }

  // Alter the product id at App level
  const relatedProductClick = (event) => {
    event.preventDefault();
    props.setProductId(props.relatedId);
  }

  return (
    <div className='card'>
      <div>
        <img onClick={relatedProductClick} src={backupImgRender(props.relatedProductThumbnail)} width='200' height='250'/>
      </div>
      <div>
      <GrayCategoryTitle>
        {props.relatedProductCategory}
      </GrayCategoryTitle>
      </div>
      <div>
        <a>{props.relatedProductName}</a>
      </div>
      <div>
        <a>${props.relatedProductPrice}</a>
      </div>
      <div>
        {calcStarImg(backupStarRender(averageReview))}
      </div>
    </div>
  )
};

export default RelatedProductsCard;

// <a>{props.relatedProductCategory}</a>