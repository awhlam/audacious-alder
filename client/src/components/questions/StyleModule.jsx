import react from 'react'
import styled from 'styled-components';

export const flexSetup = {
  display: 'flex',
  justifyContent: 'center'
}

export const mainBox = {
  borderTop: '.75px solid',
  padding: '5px',
  paddingLeft: '50px',
  paddingRight: '50px',
  margin: '5px',
  backgroundColor: '#f7f7f7'
}

export const questionBox = {
  borderTop: '1px solid',
  padding: '5px',
  paddingLeft: '50px',
  paddingRight: '50px',
  margin: 0,
  backgroundColor: '#ebebed'
}

export const answerBox = {
  borderTop: '1px solid',
  padding: '5px',
  paddingLeft: '50px',
  paddingRight: '50px',
  margin: 0,
  backgroundColor: '#dcdcde'
}

export const popup_box = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.25)'
}

export const popup_data = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000,
  width: '50%'
}

export const close = {
  float: 'right'
}

export const ButtonContainer = styled.button`
  padding: 0.5vw 1vw;
  margin-right: 1.5vw;
  font-size: 1.5vh;
  font-family: 'Lato', sans-serif;
  text-align: center;
  width: 10vw;
  &:hover {
    background-color: #ffd966
  }
`