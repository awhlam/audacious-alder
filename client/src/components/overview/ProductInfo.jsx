import React, { useState } from 'react';
import calcStarImg from '../shared/calcStarImg.jsx';

const ProductInfo = function ({ product, reviewMetaData }) {
  let sum = 0;
  let reviews = 0;
  for (const key in reviewMetaData.ratings) {
    sum += Number(reviewMetaData.ratings[key]) * Number(key);
    reviews += Number(reviewMetaData.ratings[key]);
  }
  return (
    <div className="box">
      <h3>Product Info</h3>
      <h4>
        Product Name: &nbsp;
        {product.name}
      </h4>
      <h4>
        Product Description: &nbsp;
        {product.description}
      </h4>
      <h4>
        Star Rating: &nbsp;
        {calcStarImg(sum / reviews)} idk why this has 6 stars ):
      </h4>
      <h4>
        Price: &nbsp;$
        {product.default_price}
      </h4>
      <h4>
        Product Category: &nbsp;
        {product.category}
      </h4>
      <h4>Social Media</h4>
    </div>
  );
};

export default ProductInfo;
