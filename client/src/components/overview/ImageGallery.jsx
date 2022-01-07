import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImageGalleryThumbnail from './ImageGalleryThumbnail.jsx'

const ImageGalleryContainer = styled.div`
  height: 72vh;
  width: 52vw;
  margin-left: -1vw;
  margin-right: 2vw;
`

const Figure = styled.figure`
  &:hover {
    img {
      opacity: 0;
    }
  };
  background-image: url(${props => props.productPhoto});
  background-position: ${props => props.offset};
  width: 100%;
  height: 100%;
  margin-top: 0;
  cursor: zoom-in;
  background-repeat: no-repeat;
`

const Image = styled.img`
  display: block;
  height: 72vh;
  width: 52vw;
  pointer-events: none;
  object-fit: cover;
`

const ImageGallery = function ({ productPhoto }) {


  const [image, setImage] = useState(productPhoto.photos[0].url)
  const [offset , setOffset] = useState(`0% 0%`)

  const setImageGallery = (newImage) => {
    setImage(newImage)
  }

  const handleMouseMove = e => {
    const {left, top, width, height} = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setOffset(`${x}% ${y}%`)
  }

  useEffect(() => {
    setImage(productPhoto.photos[0].url)
  }, [productPhoto])

  return (
    <div className="imageGalleryContainer">
      <ul className="imageGalleryList">
        {productPhoto.photos.map((photo, idx) => {
          return (
            <ImageGalleryThumbnail
              key={idx}
              photo={photo}
              setImageGallery={setImageGallery}
              currentImage={image}
            />
          )
        })}
      </ul>
      <ImageGalleryContainer>
        <Figure
          productPhoto={image}
          offset={offset}
          onMouseMove={handleMouseMove}>
          <Image
            alt="imageGallery"
            productPhoto={image}
            src={image}>
          </Image>
        </Figure>
      </ImageGalleryContainer>
    </div>
  )
};

export default ImageGallery;
