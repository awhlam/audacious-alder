import React, { useState, useRef } from 'react';
import StyleEntry from './StyleEntry.jsx';

// style thumbnail bar that shows thumbnail url pics and on click will render product img url to overview

const Style = function ({ productStyle, getStyleInfo }) {
  return (
    <div>
        <ul className="styleList">
          {productStyle.results.map((style, idx) => (
            <StyleEntry
              key={idx}
              style={style}
              getStyleInfo={getStyleInfo}
            />
          ))}
        </ul>
    </div>
  );
};

export default Style;
