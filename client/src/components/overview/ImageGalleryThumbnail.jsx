import React from 'react';

const ImageGalleryThumbnail = function ( { setImageGallery, photo, currentImage } ) {
  return (
    <div>
      <li>
        <img
        onClick={(e) => {setImageGallery(photo.url)}}
        className={currentImage == photo.url ? "imageGalleryThumbnailCurrent" : "imageGalleryThumbnail"}
        // className="imageGalleryThumbnail"
        src={photo.url}
        />
      </li>
    </div>
  )
}

export default ImageGalleryThumbnail;