import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const SubmitQuestionForm = ({id}) => {
  const [name, updateName] = useState(null)
  const [question, updateQuestion] = useState(null)
  const [email, updateEmail] = useState(null)
  const [submitted, updateSubmit] = useState(false)

  const addQuestion = (event) => {
    event.preventDefault();
    if (name && question && email) {
      axios.post('/questions', {body: question, name: name, email: email, id: id})
        .then((response) => {updateSubmit(true)})
        .catch((error) => {console.log(error)})
    } else {
      alert('You must fill out each form')
    }
  }

  if (!submitted) {
    return (
      <div>
      <h2>Ask Your Question</h2>
      <form onSubmit={addQuestion}>
        <div>
          <label>Name:  </label>
          <input onChange={(event) => {updateName(event.target.value)}}></input>
        </div>
        <div>
          <label>Question:  </label>
          <div>
            <textarea maxLength='1000' onChange={(event) => {updateQuestion(event.target.value)}}></textarea>
          </div>
        </div>
        <div>
          <label>Email:  </label>
          <input onChange={(event) => {updateEmail(event.target.value)}}></input>
        </div>
        <button>Submit Question</button>
      </form>
      </div>
    )
  } else {
    return (
      <div>
      <h2>Ask Your Question</h2>
      <h3>Question submitted!</h3>
      </div>
    )
  }
}