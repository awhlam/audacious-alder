/* eslint-disable */
import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList.jsx';
import products from '../../sample-data/products.js';
import axios from 'axios';

const Related = () => {
  // *************
  // State
  //**************
  let [relatedProductsId, setProductsId] = useState([]);
  let [relatedProductsDetail, setDetail] = useState([]);
  let [relatedProductsStyles, setStyles] = useState([]);

  // *************
  // Initial Renders of Data
  // *************
  useEffect(() => {
    // First axios GET for related products ID
    axios.get('/related', {params: {
      product_id: 63609
    }
  })
  .then((res) => {
    setProductsId(relatedProductsId = res.data);
    // Second axios GET for related products info using ID
    axios.get('/related/products', {params: {
      product_id: relatedProductsId
        }
      })
      .then((details) => {
        setDetail(relatedProductsDetail = details.data);
        // Third axios GET for styling data using ID
        axios.get('/related/products/styles', {params: {
          product_id: relatedProductsId
          }
        })
        .then((styles) => {
          setStyles(relatedProductsStyles = styles.data);
        })
        .catch((error) => {
          console.log(error);
        })
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
      <RelatedProductsList
      relatedProducts={relatedProductsDetail}
      relatedStyles={relatedProductsStyles}/>
    </div>
  )
};

export default Related;
