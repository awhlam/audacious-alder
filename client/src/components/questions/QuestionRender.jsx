import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import AnswerRender from './AnswerRender.jsx'

const QuestionRender = ({question}) => {
  if (question) {
    const [answers, updateAnswers] = useState({results: []})
    const [answerDisplay, updateAnswerDisplay] = useState(false)

    useEffect(() => {
      axios.get('/questions/answers', {params: {id: question.question_id}})
        .then((response) => {updateAnswers(response.data)})
        .catch((error) => {console.log(error)})
    }, [])

    let date = moment(question.question_date);
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