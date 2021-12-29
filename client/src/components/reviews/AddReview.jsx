import React from 'react';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

const AddReview = ({ showModal, openModal }) => {
  if (!showModal) { return null }
  return (
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h1>Write Your Review <button className="reviewerNameDate" onClick={openModal}>Close ❌</button></h1>
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
        <p><input type="text" placeholder="Example: Best purchase ever!"></input></p>
        <p>Review body:</p>
        <p><input type="textarea" placeholder="Why did you like the product or not?"></input></p>
        <p>Photos: <input type="file"></input></p>
        <p>What is your nickname?</p>
        <p><input type="text" placeholder="What is your nickname"></input></p>
        <p>Your email:</p>
        <p><input type="email" placeholder="Example: jackson11@email.com"></input></p>
        <p>For authentication reasons, you will not be emailed</p>
        <button>Submit Review</button>
      </div>
    </>
  );
};

export default AddReview;