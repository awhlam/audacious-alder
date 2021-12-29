import React, { useState } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import Style from './Style.jsx';
import Cart from './Cart.jsx';
import products from '../../sample-data/products';
import reviewsMeta from '../../sample-data/reviewsMeta';
import productStyle from '../../sample-data/productStyle';

const Overview = () => {
  return (
    <div>
      <h1>Overview</h1>
        <ImageGallery/>
        <ProductInfo
          product={products[0]}
          reviewsMeta={reviewsMeta}
        />
        <Style
          productStyle={productStyle}
        />
        <Cart/>
    </div>
  )
}

export default Overview;