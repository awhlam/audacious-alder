import React from 'react';

const RelatedModal  = (props) => {

  // *************
  // Handle modal close button
  //**************
  const handleModalCloseClick = (event) => {
    event.preventDefault();
    props.handleModalClose();
  }

  return (
    <div className='modal-wrapper'>
      <div className='modal'>
        <button onClick={handleModalCloseClick} className='button-close'>X</button>
        Comparison Modal
      </div>
    </div>
  )
}

export default RelatedModal;
