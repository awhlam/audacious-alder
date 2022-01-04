import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import AnswerRender from './AnswerRender.jsx'
import {SubmitAnswerForm} from './SubmitAnswerForm.jsx'

const QuestionRender = ({question, productId}) => {
  if (question) {
    const [answers, updateAnswers] = useState({results: []})
    const [answerDisplay, updateAnswerDisplay] = useState(false)

    useEffect(() => {
      axios.get('/questions/answers', {params: {id: question.question_id}})
        .then((response) => {updateAnswers(response.data)})
        .catch((error) => {console.log(error)})
    }, [question])

    let date = moment(question.question_date);

    const markHelpful = () => {
      axios.put('/questions', {id: question.question_id})
        .then((response) => {alert('Marked as helpful')})
        .catch((error) => {console.log(error)})
    }

    if (answerDisplay) {
      return (
        <div className="box">
          <div>
            {date.format('MMMM Do, YYYY')}
          </div>
          <div>
            {question.asker_name}:
          </div>
          <div>
            Q: {question.question_body}
          </div>
          <div>
            A: {answers.results.map((answer) => <AnswerRender answer={answer} />)}
          </div>
          <div>
            <span>Helpful:</span>
            <span onClick={markHelpful}>  Yes  </span>
            <span>({question.question_helpfulness})</span>
          </div>
            <SubmitAnswerForm id={question.question_id}/>
        </div>
      )
    } else {
      return (
        <div className="box">
          <div>
            {date.format('MMMM Do, YYYY')}
          </div>
          <div>
            {question.asker_name}:
          </div>
          <div>
            Q: {question.question_body}
          </div>
          <div>
            A:
            <AnswerRender answer={answers.results[0]} />
            <AnswerRender answer={answers.results[1]} />
          </div>
          <div>
            <span>Helpful:</span>
            <span onClick={markHelpful}>  Yes  </span>
            <span>({question.question_helpfulness})</span>
          </div>
          <div>
            <SubmitAnswerForm id={question.question_id}/>
          </div>
          <div>
            <button onClick={(event) => {updateAnswerDisplay(true)}}>Show more answers</button>
          </div>
        </div>
      )
    }
  } else {
    return (
      <div></div>
    )
  }
}

export default QuestionRender