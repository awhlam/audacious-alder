import React from 'react';

const RelatedModalContent = (props) => {
  return (
      <tbody>
        <tr>
          <th scope="col">{props.currentFeature.value}</th>
          <th scope="col">{props.currentFeature.feature}</th>
          <th scope="col"></th>
        </tr>
      </tbody>
  )
}

export default RelatedModalContent;