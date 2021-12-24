import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import Style from './Style.jsx';
import products from '../../sample-data/products';

const Overview = () => {
  return (
    <div>
      <h1>Overview</h1>
        <ProductInfo/>
        <Style/>
    </div>
  )
}

export default Overview;