import React, { useState } from 'react';
import products from '../../sample-data/products';

const ProductInfo = () => {
  return (
    <div>
      <div className="box">
        <h4>Product Info</h4>
          Product Name: {products[0].name}
          <br></br>
          Product Description: {products[0].description}
      </div>
    </div>
  )
}

export default ProductInfo;