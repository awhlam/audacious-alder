import React, { useState } from 'react';
import calcStarImg from '../shared/calcStarImg.jsx';
import calcAvgTotalReviews from '../shared/calcAvgTotalReviews.js';

const ProductInfo = function ({ product, styleInfo, reviewMetaData }) {

  const itemPrice = () => {
    if (styleInfo.original_price == product.default_price) {
      return (
        product.default_price
      )
    } else {
      return (
        styleInfo.original_price
      )
    }
  }

  const salePrice = () => {
    if (styleInfo.sale_price) {
      return (
        <div>
          <div className="originalPrice">
            ${itemPrice()}
          </div>
          <div className="salesPrice">
            ${styleInfo.sale_price}
          </div>
        </div>
      )
    } else {
      return (
        <div>${itemPrice()}</div>
      )
    }
  }
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
        Price: &nbsp;
        {salePrice()}
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
