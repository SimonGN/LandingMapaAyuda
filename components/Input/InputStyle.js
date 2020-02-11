import styled from 'styled-components'

const InputStyle = styled.div`
    margin-bottom: 0.5rem;
  & input {
    background: #f5f5f5;
    border-radius: 8px;
    border: ${props => props.error? "2px solid #ED5C18": "none"};
    padding: 1rem;
    font-family: "PanaGT–Regular";
    width: 100%;
    caret-color: #46BDD2;
    color: #333333;
    line-height: 20px;
    font-size: 14px;
    &::placeholder{
      color: #999999;
    }
    &:focus {
      outline: none;
    }
  }
  & p{
    max-height: ${props => props.error? "2rem": "0"};
    transform: scaleY(${props => props.error? "1": "0"});
    transition: transform 0.25s ease-in, max-height 0.5s ease-in;
    margin-top: 0.5rem;
    text-align: center;
    font-family: "PanaGT–Regular";
    color: #ED5C18;
    font-size: 12px;
  }
`

export default InputStyle