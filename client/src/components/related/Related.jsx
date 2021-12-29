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

  // Axios GET
  // const axiosGET = (url, data) => {
  //   return new Promise axios.get(url, data)
  // };

  // *************
  // Initial Renders of Data
  // *************
  useEffect(() => {
    axios.get('/related', {params: {
        product_id: 63609
      }
    })
    .then((res) => {
      setProductsId(relatedProductsId = res.data);
      const axiosParam = {
        params: {
          product_id: relatedProductsId
        }
      }
      const axiosProduct = axios.get('/related/products', axiosParam);
      const axiosStyles = axios.get('/related/products/styles', axiosParam);
      Promise.all([axiosProduct, axiosStyles])
      .then((results) => {
        console.log('this should be results: ', results);
      })
      .catch((error) => {
        console.log('This is an error: ', error);
      })
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
