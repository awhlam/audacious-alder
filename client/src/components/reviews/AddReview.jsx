import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const AddReview = ({ product_id, showModal, openModal }) => {
  const [review, setReview] = useState({
    product_id: product_id,
    rating: "5"
  });

  const handleChange = (e) => {
    setReview((oldState) => ({ ...oldState, [e.target.name]: e.target.value}));
  }

  const handleSubmit = (e) => {
    console.log('clicked submit');
    axios.post('/reviews', review);
  }

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
        <select name="rating" onChange={handleChange}>
          <option value="5">5 stars</option>
          <option value="4">4 stars</option>
          <option value="3">3 stars</option>
          <option value="2">2 stars</option>
          <option value="1">1 stars</option>
        </select>
        <p>Do you recommend this product?</p>
        <form onChange={handleChange}>
          <input type="radio" name="recommend" value="true" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" name="recommend" value="false" />
          <label htmlFor="no">No</label>
        </form>
        <p>Characteristics:</p>
        <p>Review Summary:</p>
        <p><input type="text" name="summary" placeholder="Example: Best purchase ever!" onChange={handleChange} /></p>
        <p>Review body:</p>
        <p><input type="textarea" name="body" placeholder="Why did you like the product or not?" onChange={handleChange} /></p>
        <p>Photos: <input type="file" /></p>
        <p>What is your nickname?</p>
        <p><input type="text" name="name" placeholder="What is your nickname" onChange={handleChange} /></p>
        <p>Your email:</p>
        <p><input type="email" name="email" placeholder="Example: jackson11@email.com" onChange={handleChange} /></p>
        <p>For authentication reasons, you will not be emailed</p>
        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    </>
  );
};

export default AddReview;
