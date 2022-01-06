import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {popup_box, popup_data, close} from './StyleModule.jsx'

export const SubmitAnswerForm = ({id}) => {
  const [addAnswerState, updateAddAnswer] = useState(false)
  const [name, updateName] = useState(null)
  const [answer, updateAnswer] = useState(null)
  const [email, updateEmail] = useState(null)
  const [photos, updatePhotos] = useState([])
  const [submitted, updateSubmit] = useState(false)

  if (addAnswerState) {

    const addAnswer = (event) => {
      event.preventDefault();
      if (name && answer && email) {
        axios.post('/questions/answers', {body: answer, name: name, email: email, id: id, photos: photos})
          .then((response) => {updateSubmit(true)})
          .catch((error) => {console.log(error)})
      } else {
        alert('You must fill out each form')
      }
    }

    if (!submitted) {
      return (
        <div style={popup_box}>
          <div style={popup_data}>
          <span style={close} onClick={() => {updateAddAnswer(false)}}>❌</span>
          <h2>Add An Answer</h2>
          <form onSubmit={addAnswer}>
            <div>
              <label>Name:  </label>
              <input onChange={(event) => {updateName(event.target.value)}}></input>
            </div>
            <div>
              <label>Answer:  </label>
              <div>
                <textarea maxLength='1000' onChange={(event) => {updateAnswer(event.target.value)}}></textarea>
              </div>
            </div>
            <div>
              <label>Photos:  </label>
              <input type='file' onChange={(event) => {updatePhotos([event.target.value])}}></input>
            </div>
            <div>
              <label>Email:  </label>
              <input onChange={(event) => {updateEmail(event.target.value)}}></input>
            </div>
            <button>Submit Answer</button>
          </form>
          </div>
        </div>
      )
    } else {
      return (
        <div>
        <h2>Add An Answer</h2>
        <h3>Answer Added</h3>
        </div>
      )
    }
  } else {
    return (
      <button onClick={() => {updateAddAnswer(true)}}>
        Add Answer
      </button>
    )
  }
}