import React, { useState, useRef } from 'react';
import StyleEntry from './StyleEntry.jsx';

// style thumbnail bar that shows thumbnail url pics and on click will render product img url to overview

const Style = function ({ productStyle, getStyleInfo, setStyleId, styleId }) {

  const rows = productStyle.results.reduce(function (rows, key, index) {
    return (index % 4 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows;
  }, [])



  return (
    <div
    data-testid="styleContainer"
    className="styleContainer">
      {rows.map((row, idx) => (
        <ul
          key={idx}
          className="styleList">
            {row.map((style, idx) => (
              <StyleEntry
                key={idx}
                style={style}
                getStyleInfo={getStyleInfo}
                setStyleId={setStyleId}
                styleId={styleId}
              />
            ))}
        </ul>
      ))}
    </div>
  );
};

export default Style;
