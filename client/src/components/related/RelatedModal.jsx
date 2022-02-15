import React from 'react';
import RelatedModalContent from './RelatedModalContent.jsx';

const RelatedModal  = (props) => {

  // *************
  // Handle modal close button
  //**************
  const handleModalCloseClick = (event) => {
    event.preventDefault();
    props.handleModal();
  }


  return (
    <div className='modal-wrapper'>
      <button onClick={handleModalCloseClick} className='button-close'>&#10006;</button>
      <div className='modal'>
        <div className='comparison'>
          <div className='inner-comparison'>
            <div className='current-comparison'>{props.currentProduct.name}</div>
            <div>
              {props.currentProduct.features.map((cur, idx) => {
                return (
                  <RelatedModalContent
                  key={idx}
                  feature={cur}
                  />
                )
              })}
            </div>
          </div>
          <div className='inner-comparison2'>
            <div className='current-comparison2'>{props.relatedFeature.name}</div>
            <div>
            {props.relatedFeature.features.map((rel, idx) => {
                return (
                  <RelatedModalContent
                  key={idx}
                  feature={rel}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RelatedModal;
