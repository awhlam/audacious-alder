import styled from 'styled-components';

export const ColumnContainer = styled.div`
  border: 2px solid;
  border-radius: 15px;
  padding: 25px;
  margin: 15px;
  flex: 1;
  background: white;
`

export const TableStyle = styled.table`
  padding: 15px;
  margin: 10px;
  border: 1px solid;
  border-radius: 15px;
`

export const TableRowStyle = styled.tr`
  padding: 5px;
  &:hover {
    background: #ffd966;
    font-weight: bold;
  }
`