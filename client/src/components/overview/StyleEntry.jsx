import React from 'react';

//style thumbnail bar that shows thumbnail url pics and on click will render product img url to overview

const StyleEntry = ({style}) => {
  console.log(style)
  return (
    <li>{style.name}</li>
    // <img src={`${style.photos[0].thumbnail_url}`}></img>
  )
}

export default StyleEntry;