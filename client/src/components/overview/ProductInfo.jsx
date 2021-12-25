import React, { useState } from 'react';
import Style from './Style.jsx';

const ProductInfo = (props) => {
  console.log(props.reviewsMeta)
  let sum = 0;
  let reviews = 0;
  for (let key in props.reviewsMeta.ratings) {
    sum += Number(props.reviewsMeta.ratings[key]) * Number(key)
    reviews += Number(props.reviewsMeta.ratings[key])
  }
  return (
      <div className="box">
        <h4>Product Info</h4>
          Product Name: {props.product.name}
          Product Description: {props.product.description}
        <h4>Star Rating: {sum/reviews}</h4>
        <h4>Price: ${props.product.default_price}</h4>
        <h4>Product Category: {props.product.category}</h4>
        <h4>Social Media</h4>
    </div>
  )
}

export default ProductInfo;