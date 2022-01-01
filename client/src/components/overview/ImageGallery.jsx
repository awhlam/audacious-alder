import React from 'react';

const ImageGallery = function ({ product, productPhoto }) {

  return (
    <div>
      <img
        className="imageGallery"
        src={productPhoto}
      />
    </div>
  );
};

export default ImageGallery;
