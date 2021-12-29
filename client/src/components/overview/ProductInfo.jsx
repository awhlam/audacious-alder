import React, { useState } from 'react';

const ProductInfo = function ({ product, reviewsMeta }) {
  let sum = 0;
  let reviews = 0;
  for (const key in reviewsMeta.ratings) {
    sum += Number(reviewsMeta.ratings[key]) * Number(key);
    reviews += Number(reviewsMeta.ratings[key]);
  }
  return (
    <div className="box">
      <h3>Product Info</h3>
      <h4>
        Product Name:
        {product.name}
      </h4>
      <h4>
        Product Description:
        {product.description}
      </h4>
      <h4>
        Star Rating:
        {sum / reviews}
      </h4>
      <h4>
        Price: $
        {product.default_price}
      </h4>
      <h4>
        Product Category:
        {product.category}
      </h4>
      <h4>Social Media</h4>
    </div>
  );
};

export default ProductInfo;
