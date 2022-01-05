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
    <div className="productContainer">
      <div className="productInfoContainer">
        <div className="productInfoLeft">
          <div className="productName">
            {product.name}
          </div>
          <div className="productCategory">
            {product.category}
          </div>
          <div className="productStar">
            {calcStarImg(calcAvgTotalReviews(reviewMetaData).avgStars)}
          </div>
        </div>
        <div className="productInfoRight">
          <div className="productPrice">
            {salePrice()}
          </div>
        </div>
      </div>
      <p className="productDescription">
        {product.description}
      </p>
    </div>
  );
};

export default ProductInfo;
