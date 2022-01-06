/* eslint-disable */
import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

const RelatedProductsList = (props) => {

  return (
    <div className='carousel-wrapper'>
      <div className='left-button-wrapper'>
        <button onClick={props.leftButton} className='left-button'>&#5130;</button>
      </div>
      <div className='related'>
        {props.relatedProducts.map((product) => {
          return <RelatedProductsCard
            key={product.details.id}
            currentProduct={props.currentProduct}
            related={product}
            relatedId={product.details.id}
            setProductId={props.setProductId}
            />
          })}
        </div>
        <div className='right-button-wrapper'>
            <button onClick={props.rightButton} className='right-button'>&#5125;</button>
          </div>
      </div>
  )
};

export default RelatedProductsList;
