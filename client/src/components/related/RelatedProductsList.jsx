/* eslint-disable */
import React from 'react';
import RelatedProductsCard from './RelatedProductsCard.jsx';

const RelatedProductsList = (props) => (
  <div className='carousel-wrapper'>
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
            setProductId={props.setProductId}
            handleModalOpen={props.handleModalOpen}
            handleModalClose={props.handleModalClose}
            />
        })}
      </div>
  </div>
);

export default RelatedProductsList;
