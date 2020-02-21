import styled from 'styled-components'

const InputStyle = styled.div`
    margin-bottom: 0.5rem;
  & input {
    background: ${({theme}) => theme.colors.lightGray};
    border-radius: 8px;
    border: ${props => props.error? `2px solid ${props.theme.colors.red}`: "none"};
    padding: 1rem;
    font-family: "GT-Regular";
    width: 100%;
    caret-color: ${({theme}) => theme.colors.blue};
    color: ${({theme}) => theme.colors.dark80};
    line-height: 20px;
    font-size: 14px;
    &::placeholder{
      color: ${({theme}) => theme.colors.dark40};
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
    font-family: "GT-Regular";
    color: ${({theme}) => theme.colors.red};
    font-size: 12px;
  }
`

export default InputStyle