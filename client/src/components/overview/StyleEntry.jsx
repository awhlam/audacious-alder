import React from 'react';

// style thumbnail bar that shows thumbnail url pics and on click will render product img url to overview

const StyleEntry = function (props) {
  return (
    <div>
      <li>{props.style.name}</li>
      <img
        className="thumbnail"
        src={props.style.photos[0].thumbnail_url}
      />
    </div>
  );
};

export default StyleEntry;
