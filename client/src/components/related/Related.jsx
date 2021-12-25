import React, { useState } from 'react';
import RelatedProductsList from './RelatedProductsList.jsx';
import products from '../../sample-data/products.js';

const Related = () => {
  // state
  const [relatedProducts, setRelatedProducts] = useState(products);

  return (
    <div>
      <h1>Related</h1>
      <RelatedProductsList relatedProducts={relatedProducts}/>
    </div>
  )
};

export default Related;

// create the over wrapping divs for each component
// load the sample data into the related products
// once created, use conditional rendering to create the comparison modal