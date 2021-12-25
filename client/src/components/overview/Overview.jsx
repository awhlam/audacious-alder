import React, { useState } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import Style from './Style.jsx';
import Cart from './Cart.jsx';
import products from '../../sample-data/products';
import reviewsMeta from '../../sample-data/reviewsMeta';

const Overview = () => {
  return (
    <div>
      <h1>Overview</h1>
        <ImageGallery/>
        <ProductInfo
          product={products[0]}
          reviewsMeta={reviewsMeta}
        />
        <Style/>
        <Cart/>
    </div>
  )
}

export default Overview;