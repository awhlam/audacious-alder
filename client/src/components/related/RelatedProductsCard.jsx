/* eslint-disable */
import React, { useState } from 'react';
import calcStarImg from '../shared/calcStarImg.jsx';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';
import RelatedModal from './RelatedModal.jsx';

import { GrayCategoryTitle } from './RelatedProductsCard.styles.js'

const RelatedProductsCard = (props) => {
  // ***********
  // State
  // ***********
  const [backupImage, setBackupImage] = useState(false);
  const [modalOpen, setModal] = useState(false);

  // Calculate avg review
  let averageReview = calcAvgTotalReviews(props.related.reviewsMeta).avgStars;

  // ***********
  // Func for rendering back up image
  // ***********
  const backupImgRender = (img) => {
    if (!img) {
      return '../../../images/placeHolder.png';
    } else {
      return img;
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
  // Func for opening and closing modals
  // ***********
  const handleModal = () => {
    if (!modalOpen) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  // ***********
  // Handle modal open button click
  // ***********
  const handleModalOpenClick = (event) => {
    event.preventDefault();
    handleModal();
  }

  return (
    <div className='card'>
      <div>
        <img className='thumbnail-img' onClick={relatedProductClick} src={backupImgRender(props.related.styles.results[0].photos[0].thumbnail_url)} width='200px' height='250px'/>
      </div>
      <div>
      <GrayCategoryTitle>
        {props.related.details.category}
      <div></div>
      </GrayCategoryTitle>
      </div>
      <div>
        <a className='clickableName' onClick={relatedProductClick}>{props.related.details.name}</a>
      </div>
      <div>
        <a className='clickablePrice' onClick={relatedProductClick}>${props.related.details.default_price}</a>
      </div>
      <div>
        {calcStarImg(averageReview)}
        <button
        onClick={handleModalOpenClick} className='modal-button'>♥</button>
      </div>
      {!modalOpen ? '' : <RelatedModal
          handleModal={handleModal}
          currentProduct={props.currentProduct}
          relatedFeature={props.related.details}
        />}
    </div>
  )
};

export default RelatedProductsCard;
