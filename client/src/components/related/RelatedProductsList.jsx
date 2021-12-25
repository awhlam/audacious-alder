import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

const RelatedProductsList = (props) => (
  // state
  <div>
    <h3>Related Products</h3>
    <div className='related'>
      {props.relatedProducts.map((product) => {
        return <RelatedProductsCard
          key={product.id }
          relatedProductName={product.name}
          relatedProductCategory={product.category}
          relatedProductPrice={product.default_price}
          />
      })}
    </div>
  </div>
);

export default RelatedProductsList;
