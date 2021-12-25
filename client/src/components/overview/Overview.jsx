import React, { useState } from 'react';
import ProductInfo from './ProductInfo.jsx';
import Style from './Style.jsx';
import Cart from './Cart.jsx';
import ProductIMG from './ProductIMG.jsx';
import products from '../../sample-data/products';

const Overview = () => {
  return (
    <div>
      <h1>Overview</h1>
        <div>
          <ProductIMG/>
        </div>
        <div>
          <ProductInfo/>
            <br></br>
          <Style/>
            <br></br>
          <Cart/>
        </div>
        <div>
          <h4>Product IMG</h4>
        </div>
    </div>
  )
}

export default Overview;