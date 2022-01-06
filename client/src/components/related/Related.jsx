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
  let [relatedProducts, setDetail] = useState([]);

  // *************
  // Function
  //**************
  const rightButton = (event) => {
    event.preventDefault();
    const relatedLength = relatedProducts.length;
    let chunkArr = relatedProducts.slice(0, relatedLength - 1);
    let singleArr = relatedProducts.slice(relatedLength - 1, relatedLength);
    let reOrdered = singleArr.concat(chunkArr);
    setDetail(reOrdered);
  }

  const leftButton = (event) => {
    event.preventDefault();
    const relatedLength = relatedProducts.length;
    let chunkArr = relatedProducts.slice(1);
    let singleArr = relatedProducts.slice(0, 1);
    let reOrdered = chunkArr.concat(singleArr);
    setDetail(reOrdered);
  }


  // *************
  // Initial Renders of Data
  // *************
  useEffect(() => {
    axios.get('/related', {params: {
        product_id: props.productId
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
      const axiosReviews = axios.get('/related/products/reviews/meta', axiosParam);
      Promise.all([axiosProduct, axiosStyles, axiosReviews])
      .then((results) => {
        const apiDetail = results[0].data;
        const apiStyles = results[1].data;
        const apiReviewMeta = results[2].data;
        const productData = [];
        for (let i = 0; i < apiDetail.length; i+=1) {
          let hash = {};
          hash.details = apiDetail[i];
          hash.styles = apiStyles[i];
          hash.reviewsMeta = apiReviewMeta[i];
          productData.push(hash);
        }
        setDetail(productData);
      })
      .catch((error) => {
        console.log('This is an error: ', error);
      })
    })
  }, [props.productId])

    return (
      <div>
        <h1>Related Products</h1>
        <RelatedProductsList
          currentProduct={props.currentProduct}
          relatedProducts={relatedProducts}
          setProductId={props.setProductId}
        />
        <button onClick={leftButton} className='left-button'>&#5130;</button>
        <button onClick={rightButton} className='right-button'>&#5125;</button>
      </div>
    )
};

export default Related;
