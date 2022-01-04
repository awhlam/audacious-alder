/* eslint-disable */
import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

const RelatedProductsList = (props) => (
  <div className='carousel-wrapper'>
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
  </div>
);

export default RelatedProductsList;
