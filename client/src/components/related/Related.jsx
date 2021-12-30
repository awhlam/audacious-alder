/* eslint-disable */
import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList.jsx';
import products from '../../sample-data/products.js';
import axios from 'axios';

const Related = (props) => {
  // *************
  // State
  //**************
  let [relatedProductsId, setProductsId] = useState([]);
  let [relatedProductsDetail, setDetail] = useState([]);

  // *************
  // Initial Renders of Data
  // *************
  useEffect(() => {
    axios.get('/related', {params: {
        product_id: props.product.id
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
        // console.log('this should be results: ', results);
        const apiDetail = results[0].data;
        const apiStyles = results[1].data;
        for(let i = 0; i < apiDetail.length; i += 1) {
          for(let j = 0; j < apiStyles.length; j += 1) {
            if (apiDetail[i].id.toString() === apiStyles[j].product_id) {
              apiDetail[i].styles = apiStyles[j].results;
              break;
            }
          }
        }
        setDetail(apiDetail);
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
      setProductId={props.setProductId}/>
    </div>
  )
};

export default Related;
