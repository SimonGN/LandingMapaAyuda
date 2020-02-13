import styled from 'styled-components';

const StyledFullScreenContainer = styled.div`
  min-height: ${({navHeight})=> `calc(100vh - ${navHeight}px)`};
  display: flex;
  justify-content: center;
  .content{
    margin-top: 2rem;
    width:100%;
    padding: 1rem;
    padding-bottom:5%;
    background-color: ${({color}) => color? color : "#DDF3EC"};
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  @media only screen and (min-width:769px) and (max-width:1024px){
    .content{
      width:95%;
      margin-bottom: 1rem;
      align-items: center;
    }
  }
  @media only screen and (min-width:1025px){
    .content{
      width:97%;
      margin-bottom: 1rem;
      align-items: center;
    }
  }
`
export default StyledFullScreenContainer