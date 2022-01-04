/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import calcStarImg from '../shared/calcStarImg.jsx';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';

// Color styling for category words
const GrayCategoryTitle = styled.a`
color: gray
`;

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

  // ***********
  // Alter the product id at App level
  // ***********
  const relatedProductClick = (event) => {
    event.preventDefault();
    props.setProductId(props.relatedId);
  }

  // ***********
  // Handle modal open button click
  // ***********
  const handleModalOpenClick = (event) => {
    event.preventDefault();
    props.handleModalOpen();
  }

  return (
    <div className='card'>
      <div>
        <img onClick={relatedProductClick} src={backupImgRender(props.relatedProductThumbnail)} width='200' height='250'/>
      </div>
      <button onClick={handleModalOpenClick} className='modal-button'>♡</button>
      <div>
      <GrayCategoryTitle>
        {props.relatedProductCategory}
      </GrayCategoryTitle>
      </div>
      <div>
        <a href="#top" onClick={relatedProductClick} >{props.relatedProductName}</a>
      </div>
      <div>
        <a href="#top" onClick={relatedProductClick}>${props.relatedProductPrice}</a>
      </div>
      <div>
        {calcStarImg(backupStarRender(averageReview))}
      </div>
    </div>
  )
};

export default RelatedProductsCard;

// <a>{props.relatedProductCategory}</a>