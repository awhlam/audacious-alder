/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';

// Color styling for category words
const GrayCategoryTitle = styled.a`
color: gray
`;

// Card styling 

const RelatedProductsCard = (props) => {
  // State
  const [backupImage, setBackupImage] = useState(false);

  // Func for rendering back up image
  const backupImgRender = (img) => {
    if (!img) {
      return '../../../images/small/placeHolder.png'
    } else {
      return img
    }
  }

  // Alter the product id at App level
  const relatedProductClick = (event) => {
    event.preventDefault();
    console.log('clicked');
    console.log(props.product_id);
    props.setProductId(props.product_id);
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
        <a onClick={relatedProductClick}>{props.relatedProductName}</a>
      </div>
      <div>
        <a onClick={relatedProductClick}>${props.relatedProductPrice}</a>
      </div>
      <div>
        REVIEW 'GET' HERE
      </div>
    </div>
  )
};

export default RelatedProductsCard;

// <a>{props.relatedProductCategory}</a>