import styled from 'styled-components';

const Card = styled.div`
  background: ${({theme}) => theme.colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
  width: ${({width}) => width ? width : '100%'};
  @media only screen and (max-width:768px){
    padding: 1rem;
  }
`
export default Card