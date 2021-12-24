import React, { useState } from 'react';
import products from '../../sample-data/products';
import reviews from '../../sample-data/review';


const Overview = () => {
  return (
    <Stars/>
    <div>
      Product Name: {products[0].name}
    </div>
  )
}

export default Overview;