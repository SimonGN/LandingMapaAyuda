import styled from 'styled-components';

const FullScreenContainer = styled.div`
  min-height: ${({navHeight})=> `calc(100vh - ${navHeight}px)`};
  display: flex;
  justify-content: center;
  .login-container{
    margin-top: 2rem;
    width:100%;
    padding-bottom:5%;
    background-color: ${({color}) => color? color : "#DDF3EC"};
    border-radius: 16px;
  }
  @media only screen and (min-width:769px) and (max-width:1024px){
    .login-container{
      width:95%;
      margin-bottom: 1rem;
    }
  }
  @media only screen and (min-width:1025px){
    .login-container{
      width:97%;
      margin-bottom: 1rem;
    }
  }
`
export default FullScreenContainer