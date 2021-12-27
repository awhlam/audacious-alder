import React, { useState } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import Style from './Style.jsx';
import Cart from './Cart.jsx';
import reviewsMeta from '../../sample-data/reviewsMeta';
import productStyle from '../../sample-data/productStyle';

const Overview = function ({ product }) {
  return (
    <div>
      <h1>Overview</h1>
      <div>
        <ImageGallery
          productStyle={productStyle.results[0]}
        />
      </div>
      <div>
        <ProductInfo
          product={product}
          reviewsMeta={reviewsMeta}
        />
        <Style
          productStyle={productStyle}
        />
        <Cart
          skus={productStyle.results[0].skus}
        />
      </div>
    </div>
  );
};

export default Overview;
