import React from 'react';
import RelatedModalContent from './RelatedModalContent.jsx';

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
      <button onClick={handleModalCloseClick} className='button-close'>X</button>
      <table className='modal'>
        <thead>
          <tr>
            <th scope="col">{props.currentProduct.name}</th>
            <th scope="col"> </th>
            <th scope="col">{props.relatedFeature.name}</th>
          </tr>
        </thead>
        {props.currentProduct.features.map((cur, idx) => {
          return (
            <RelatedModalContent
            key={idx}
            currentFeature={cur}
            />
          )
        })}
      </table>
    </div>
  )
}

export default RelatedModal;


    // <div className='modal-wrapper'>
    //   <div className='modal'>
    //     <button onClick={handleModalCloseClick} className='button-close'>X</button>
    //     <strong>Comparison Modal</strong>
    //     <div className='left-comparison'>
    //       {props.currentProduct.features.map((comparison, idx) => {
    //         return <RelatedModalLeftContent
    //         key={idx}
    //         comparison={comparison}
    //         />
    //       })}
    //     </div>
    //   </div>
    // </div>
