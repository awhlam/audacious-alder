import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList.jsx';
import products from '../../sample-data/products.js';
import axios from 'axios';

const Related = () => {
  // state
  let [relatedProductsId, setProductsId] = useState([]);
  // let [relatedProducts, setRelatedProducts] = useState(products);
  let [relatedProductsDetails, setDetails] = useState([]);

  // useEffect to get the product_id
  useEffect(() => {
    axios.get('/related', {params: {
      product_id: 63609
    }
  })
  .then((res) => {
    setProductsId(relatedProductsId = res.data);
    axios.get('/related/products', {params: {
      product_id: relatedProductsId
        }
      })
      .then((res) => {
        setDetails(relatedProductsDetails = res.data);
        console.log('LIVE Related Product Data', relatedProductsDetails);
      })
      .catch((err) => {
        console.log(err);
      })
  })
  .catch((err) => {
    console.log(err);
  })
  }, [])

  return (
    <div>
      <h1>Related</h1>
      <RelatedProductsList relatedProducts={relatedProductsDetails}/>
    </div>
  )
};

export default Related;

// create the over wrapping divs for each component
// load the sample data into the related products
// once created, use conditional rendering to create the comparison modal