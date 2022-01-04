/* eslint-disable */
import React, { useState, useEffect } from 'react';
import RelatedProductsList from './RelatedProductsList.jsx';
import products from '../../sample-data/products.js';
import axios from 'axios';
import RelatedModal from './RelatedModal.jsx';

const Related = (props) => {
  // *************
  // State
  //**************
  let [relatedProductsId, setProductsId] = useState([]);
  let [relatedProducts, setDetail] = useState([]);
  let [modalOpen, setModal] = useState(false);

  // *************
  // Functions
  //**************
  const handleModalOpen = () => {
    if (!modalOpen) {
      setModal(true);
      console.log(modalOpen);
    }
  };

  const handleModalClose = () => {
    if (modalOpen) {
      setModal(false);
    }
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

  if (!modalOpen) {
    return (
      <div>
        <h1>Related Products</h1>
        <RelatedProductsList
          relatedProducts={relatedProducts}
          setProductId={props.setProductId}
          handleModalOpen={handleModalOpen}
        />
      </div>
    )
  } else {
    return (
      <div>
        <h1>Related Products</h1>
        <RelatedModal
          handleModalClose={handleModalClose}
        />
        <RelatedProductsList
          relatedProducts={relatedProducts}
          setProductId={props.setProductId}
          handleModalOpen={handleModalOpen}
        />
      </div>
    )
  }
};

export default Related;
