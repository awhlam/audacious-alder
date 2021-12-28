/* eslint-disable */
import React, { useState } from 'react';

const RelatedProductsCard = (props) => {
  // state
  const [comparisonModal, setModal] = useState(false);

  const clickMe = () => {
    console.log('Click Me');
  }

  return (
    <div className='card'>
      <div>
        IMG GET here
      </div>
        <div>
          <a onClick={clickMe}>{props.relatedProductName}</a>
        </div>
        <div>
          <a onClick={clickMe}>{props.relatedProductPrice}</a>
        </div>
      <div>
        REVIEW 'GET' HERE
      </div>
    </div>
  )
};

export default RelatedProductsCard;
