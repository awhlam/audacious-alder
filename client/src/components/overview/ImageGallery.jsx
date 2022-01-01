import React from 'react';

const ImageGallery = function ({ product, productPhoto }) {

  return (
    <div>
      <img
        className="imageGallery"
        src={productPhoto.photos[0].url}
      />
    </div>
  );
};

export default ImageGallery;
