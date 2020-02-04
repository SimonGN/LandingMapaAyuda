import styled from 'styled-components';

const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: ${({padding}) => padding? padding : '2rem'}
`
export default Card