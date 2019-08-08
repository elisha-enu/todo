import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background: #ef5350;
  min-height: 32px;
  min-width: 72px;
  color: black;
  border-radius: 20px;
  outline: none;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  
  :hover {
    background:#e94141;
    cursor: pointer;
  }
`