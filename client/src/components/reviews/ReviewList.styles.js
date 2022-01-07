import styled from 'styled-components';

export const ColumnContainer = styled.div`
  border: 1px solid;
  border-radius: 15px;
  padding: 25px;
  margin: 15px;
  flex: 3;
  background: white;
  box-shadow: 2px 2px grey;
`;

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
`;
