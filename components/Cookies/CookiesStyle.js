import styled from "styled-components";

export const CookieWrapper = styled.div`
  position: fixed;
  width: 330px;
  height: 290px;
  left: 2%;
  bottom: 2%;
  background-color: ${props =>props.backgroundColor ? props.backgroundColor : props.theme.colors.white};
  color: ${props => (props.color ? props.color : props.theme.colors.dark100)};
  display: ${props => (props.display ? props.display : "flex")};

  border-radius:18px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 1s ease 0s;
  z-index: 3;
  .text{
    margin: 0 auto;
    width:80%;
  }
  .title{
    display:flex;
    margin:12% 0 7%;
    p:first-child{
      margin-right:5%;
    }
  }
  .paragraph{
    margin-bottom:7%;
  }
  a {
    color: ${props => (props.color ? props.color : props.theme.colors.blue)};
  }
  a:visited {
    color: ${props => (props.color ? props.color : props.theme.colors.blue)};
  }
  .cookies-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
  }

`;