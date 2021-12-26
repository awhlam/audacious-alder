import React from 'react';

const ImageGallery = function (props) {
  return (
    <div>
      <img
        className="imageGallery"
        src={props.productStyle.results[0].photos[0].url}
      />
    </div>
  );
};

export default ImageGallery;
