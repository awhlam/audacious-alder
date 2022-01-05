import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import Style from './Style.jsx';
import Cart from './Cart.jsx';
import axios from 'axios';

const Overview = function ({ product, productStyle, reviewMetaData }) {

  const [styleInfo, setStyleInfo] = useState(productStyle.results[0])
  const [styleId, setStyleId] = useState(null)

  const getStyleInfo = (styleId) => {
    for (let i = 0; i < productStyle.results.length; i++) {
      if (productStyle.results[i].style_id === styleId) {
        setStyleInfo(productStyle.results[i])
      }
    }
  }

  useEffect(() => {
    setStyleInfo(productStyle.results[0])
    setStyleId(null)
  }, [productStyle])

  return (
    <div className="overview">
      <div className="overviewLeft">
        <ImageGallery
          productPhoto={styleInfo}
        />
      </div>
      <div className="overviewRight">
        <ProductInfo
          product={product}
          styleInfo={styleInfo}
          reviewMetaData={reviewMetaData}
        />
        <div className="styleCart">
          <Style
            getStyleInfo={getStyleInfo}
            productStyle={productStyle}
            setStyleId={setStyleId}
            styleId={styleId}
          />
          <Cart
            skus={styleInfo.skus}
            styleId={styleId}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
