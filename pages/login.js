import React from "react";
import styled from 'styled-components'
import Meta from "../components/Meta";
import Nav from "../components/Nav/Nav";

export default function Login() {
  return (
    <React.Fragment>
    <Meta />
    <Nav/>
    <LoginStyle>
      <div className="login-container">
        <p>This is the loginn page</p>
      </div>
    </LoginStyle>
    </React.Fragment>
  );
}

const LoginStyle = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  width:90vw;
  padding-bottom:5%;
  background-color: #DDF3EC;
  border-radius: 16px;
  .login-container{
  }
  @media only screen and (min-width:769px) and (max-width:1024px){
        padding-bottom: 3%;
        width: 94vw;
  }
  @media only screen and (min-width:1025px) {
        padding-bottom: 30px;
        width: 97vw;
  }
`
