import React, { useState } from 'react';
import products from '../../sample-data/products';


const Overview = () => {
  return (
    <div>
      Product Name: {products[0].name}
      <br></br>
      Product Description: {products[0].description}
    </div>
  )
}

export default Overview;