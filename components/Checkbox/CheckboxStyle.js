import styled from 'styled-components'

const CheckboxStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & .checkbox {
    width: 1rem;
    height: 1rem;
    border-radius: 4px;
    border: 1px solid  ${({theme}) => theme.colors.dark60};
    margin-right: 0.5rem;
    padding: 2px;
    & .checked {
      background-color: ${({theme}) => theme.colors.green};
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  }
  & .label{
    font-size: 12px;
    color: ${({theme}) => theme.colors.dark60};
    font-family: "PanaGT–Regular";
  }
`

export default CheckboxStyle