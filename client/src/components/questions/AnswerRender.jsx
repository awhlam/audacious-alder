import React from 'react'
import axios from 'axios'
import moment from 'moment'

const AnswerRender = ({answer}) => {
  if (answer) {
    let date = moment(answer.date);

    const markHelpful = () => {
      axios.put('/questions/answers', {id: answer.answer_id})
        .then((response) => {alert('Marked as helpful')})
        .catch((error) => {console.log(error)})
    }

    return (
      <div className="box">
        <div>
          {date.format('MMMM Do, YYYY')}
        </div>
        <div>
          {answer.answerer_name}:
        </div>
        <div>
          {answer.body}
        </div>
        <div>
          <span>Helpful:</span>
          <span onClick={markHelpful}>  Yes  </span>
          <span>({answer.helpfulness})</span>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default AnswerRender