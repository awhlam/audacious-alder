import React, {useState} from 'react';

// style thumbnail bar that shows thumbnail url pics and on click will render product img url to overview

const StyleEntry = function ({ style, getStyleInfo, setStyleId, styleId }) {


  return (
    <div className="thumbnailStyle">
      <img
        onClick={(e) => {
          getStyleInfo(style.style_id);
          setStyleId(style.style_id);
        }}
        className={styleId === style.style_id ? "thumbnailSelected" : "thumbnail"}
        src={style.photos[0].thumbnail_url}
      />
      <li className="styleName">{style.name}</li>
    </div>
  );
};

export default StyleEntry;
