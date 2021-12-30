/* eslint-disable */
import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

const RelatedProductsList = (props) => (
  <div>
    <h3>Related Products</h3>
    <div className='related'>
      {props.relatedProducts.map((product) => {
        return <RelatedProductsCard
          key={product.id }
          relatedProductName={product.name}
          relatedProductCategory={product.category}
          relatedProductPrice={product.default_price}
          relatedProductThumbnail={product.styles[0].photos[0].thumbnail_url}
          />
      })}
    </div>
  </div>
);

export default RelatedProductsList;
