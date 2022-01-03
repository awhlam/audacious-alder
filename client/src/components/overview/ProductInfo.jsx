import React, { useState } from 'react';
import calcStarImg from '../shared/calcStarImg.jsx';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';

const ProductInfo = function ({ product, reviewMetaData }) {
  return (
    <div className="box">
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
        {calcAvgTotalReviews(reviewMetaData).avgStars} &nbsp;
        {calcStarImg(calcAvgTotalReviews(reviewMetaData).avgStars)}
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
