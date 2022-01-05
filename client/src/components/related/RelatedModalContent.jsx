import React from 'react';

const RelatedModalContent = (props) => {
  return (
      <div className='individual-feature'>
        {props.feature.feature}: {props.feature.value}
      </div>
  )
}

export default RelatedModalContent;