/* eslint-disable */
import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

const RelatedProductsList = (props) => (
  <div>
    <div className='related'>
      {props.relatedProducts.map((product) => {
        return <RelatedProductsCard
          key={product.details.id}
          relatedId={product.details.id}
          relatedProductName={product.details.name}
          relatedProductCategory={product.details.category}
          relatedProductPrice={product.details.default_price}
          relatedProductThumbnail={product.styles.results[0].photos[0].thumbnail_url}
          relatedReviewsMeta={product.reviewsMeta}
          setProductId={props.setProductId}/>
      })}
    </div>
  </div>
);

export default RelatedProductsList;
