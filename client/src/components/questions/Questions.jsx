import React, {useState, useEffect} from 'react';
import axios from 'axios'
import QuestionRender from './QuestionRender.jsx'
import {SubmitQuestionForm} from './SubmitQuestionForm.jsx'

const Questions = ({productId}) => {

  const [questions, updateQuestions] = useState({results: []})
  const [questionDisplay, updateQuestionDisplay] = useState(false)

  useEffect(() => {
    axios.get('/questions', {params: {id: productId}})
      .then((response) => {updateQuestions(response.data)})
      .catch((error) => {console.log(error)})
  }, [productId])

  if (questionDisplay) {
    return (
      <div className="box">
        <h1>
          Questions
        </h1>
        <div>
          {questions.results.map((question) => <QuestionRender question={question}/>)}
        </div>
        <SubmitQuestionForm id={productId}/>
      </div>
    )
  } else {
    return (
      <div className="box">
        <h1>
          Questions
        </h1>
        <div>
          <QuestionRender question={questions.results[0]}/>
          <QuestionRender question={questions.results[1]}/>
          <QuestionRender question={questions.results[2]}/>
          <QuestionRender question={questions.results[3]}/>
        </div>
        <button onClick={(event) => {updateQuestionDisplay(true)}}>Show more questions</button>
        <SubmitQuestionForm id={productId}/>
      </div>
    )
  }
}

export default Questions;