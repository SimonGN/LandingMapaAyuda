import styled from "styled-components";

export const CookiesStyles = styled.div`
  position: fixed;
  width: 300px;
  height: 276px;
  left: 2%;
  bottom: 2%;
  background-color: white;
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
    color: ${props => (props.color ? props.color : "#46BDD2")};
  }
  a:visited {
    color: ${props => (props.color ? props.color : "#46BDD2")};
  }
  .cookies-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 80%;
  }

`;