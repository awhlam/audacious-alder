import React from 'react';

const ImageGallery = function ({ productStyle }) {
  return (
    <div>
      <img
        className="imageGallery"
        src={productStyle.photos[0].url}
      />
    </div>
  );
};

export default ImageGallery;
