import React, { useState, useEffect } from 'react';
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
  width: '50%',
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

const AddReview = ({ productId, showModal, openModal, fetchData }) => {
  const [review, setReview] = useState({
    photos: [],
    characteristics: {}
  });

  useEffect(() => {
    setReview((oldState) => ({ ...oldState, product_id: productId }));
  }, [productId]);

  const handleChange = (e) => {
    let field = e.target.name;
    let value = e.target.value;

    if (field === 'rating') {
      value = parseInt(value);
    } else if (field === 'recommend') {
      value = value === 'true';
    }

    setReview((oldState) => ({ ...oldState, [field]: value }));
  }

  const handleSubmit = (e) => {
    axios.post('/reviews', review)
      .then((res) => {
        alert('Your review has been submitted');
        openModal();
        fetchData(productId);
      })
      .catch((err) => { console.log(err) });
  }

  if (!showModal) { return null; }
  return (
    <div>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <h1>Write Your Review
          <CloseButton onClick={openModal}>
            Close ❌
          </CloseButton>
        </h1>
        <p>Overall Rating*</p>
        <select name="rating" onChange={handleChange}>
          <option>Select a Rating</option>
          <option value="5">5 Stars - Great</option>
          <option value="4">4 Stars - Good</option>
          <option value="3">3 Stars - Average</option>
          <option value="2">2 Stars - Fair</option>
          <option value="1">1 Star - Poor</option>
        </select>
        <p>Do you recommend this product?*</p>
        <form onChange={handleChange}>
          <input type="radio" name="recommend" value="true" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" name="recommend" value="false" />
          <label htmlFor="no">No</label>
        </form>
        <p>Characteristics*</p>
        <p>Review Summary:</p>
        <p><input type="text" name="summary" size="58" placeholder="Example: Best purchase ever!" onChange={handleChange} /></p>
        <p>Review Body*</p>
        <p><textarea name="body" rows="4" cols="50" placeholder="Why did you like the product or not?" onChange={handleChange} /></p>
        <p>Photos: <input type="file" /></p>
        <p>What is your nickname?*</p>
        <p><input type="text" name="name" placeholder="What is your nickname" onChange={handleChange} /></p>
        <p>Your email*</p>
        <p><input type="email" name="email" placeholder="Example: jackson11@email.com" onChange={handleChange} /></p>
        <p>For authentication reasons, you will not be emailed</p>
        <button onClick={handleSubmit}>Submit Review</button>
      </div>
    </div>
  );
};

export default AddReview;
