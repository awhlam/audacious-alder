import React from 'react';
import styled from 'styled-components'

const AddReview = ({ showModal, openModal }) => {
  const CloseButton = styled.button`
    float: right;
  `

  const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000,
  };

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000,
  };

  if (!showModal) { return null; }
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h1>Write Your Review
          <CloseButton onClick={openModal}>
            Close ❌
          </CloseButton>
        </h1>
        <p>Overall Rating:</p>
        <select>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 stars</option>
        </select>
        <p>Do you recommend this product?</p>
        <form>
          <input type="radio" name="recommend" value="yes" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" name="recommend" value="no" />
          <label htmlFor="no">No</label>
        </form>
        <p>Characteristics:</p>
        <p>Review Summary:</p>
        <p><input type="text" placeholder="Example: Best purchase ever!" /></p>
        <p>Review body:</p>
        <p><input type="textarea" placeholder="Why did you like the product or not?" /></p>
        <p>Photos: <input type="file" /></p>
        <p>What is your nickname?</p>
        <p><input type="text" placeholder="What is your nickname" /></p>
        <p>Your email:</p>
        <p><input type="email" placeholder="Example: jackson11@email.com" /></p>
        <p>For authentication reasons, you will not be emailed</p>
        <button>Submit Review</button>
      </div>
    </>
  );
};

export default AddReview;
