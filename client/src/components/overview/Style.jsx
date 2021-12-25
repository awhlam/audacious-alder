import React from 'react';
import productStyle from '../../sample-data/productStyle';
import StyleEntry from './StyleEntry.jsx'

//style thumbnail bar that shows thumbnail url pics and on click will render product img url to overview

const Style = () => {
  return (
    <div className="box">
      <h4>Style Toggle</h4>
        <div>
          <ul>
            {productStyle.results.map((style, idx) => {
              return (
                <StyleEntry
                  key={idx}
                  style={style}
                />
              )
            })}
          </ul>
        </div>
    </div>
  )
}

export default Style;