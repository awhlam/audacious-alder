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
  border: 2px solid;
  border-radius: 15px;
`

export const RowStyle = styled.tr`
  background: ${props => props.active ? '#d0535f' : 'white'};
  color: ${props => props.active ? 'white' : 'black'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  &:hover {
    background: #ffd966;
    font-weight: bold;
  }
`

export const CellStyle = styled.td`
  padding-left: 15px;
  padding-right: 15px;
`