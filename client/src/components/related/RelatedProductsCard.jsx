/* eslint-disable */
import React, { useState } from 'react';

const RelatedProductsCard = (props) => {
  // State
  const [backupImage, setBackupImage] = useState(false);

  const clickMe = () => {
    console.log('Click Me');
  }

  const backupImgRender = (img) => {
    if (!img) {
      return '../../../images/small/placeHolder.png'
    } else {
      return img
    }
  }

  return (
    <div className='card'>
      <div>
        <img src={backupImgRender(props.relatedProductThumbnail)} width='200' height='250'/>
      </div>
      <div>
        <a className='related-category'>{props.relatedProductCategory}</a>
      </div>
      <div>
        <a onClick={clickMe}>{props.relatedProductName}</a>
      </div>
      <div>
        <a onClick={clickMe}>${props.relatedProductPrice}</a>
      </div>
      <div>
        REVIEW 'GET' HERE
      </div>
    </div>
  )
};

export default RelatedProductsCard;
