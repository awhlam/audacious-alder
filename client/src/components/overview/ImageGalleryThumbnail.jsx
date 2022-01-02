import React from 'react';

const ImageGalleryThumbnail = function ( { setImageGallery, photo } ) {
  return (
    <div>
      <li>
        <img
        onClick={(e) => {setImageGallery(photo.url)}}
        className="imageGalleryThumbnail"
        src={photo.url}
        />
      </li>
    </div>
  )
}

export default ImageGalleryThumbnail;