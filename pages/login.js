import React from "react";
import Meta from "../components/Meta";
import Nav from "../components/Nav/Nav";
import styled from 'styled-components'
import { FullScreenContainer, Card, Button } from '../components'
import googleLogo from '../static/svg/icon-google-login.svg'
import facebookLogo from '../static/img/icon-facebook.png'

export default function Login() {
  return (
    <React.Fragment>
    <Meta/>
    <Nav/>
    <LoginStyle>
      <FullScreenContainer>
        <Card>
          <div className="social-buttons">
            <Button
              backgroundColor="rgba(234, 67, 53, 0.2)"
              color="#EA4335"
              light
            >
              <img src={googleLogo}/>
              Google
            </Button>
            <Button
              backgroundColor="rgba(71, 89, 147, 0.2)"
              color="#475993"
              light
            >
              <img src={facebookLogo}/>
              Facebook
            </Button>
          </div>
          <div className="separator">
            <div>or</div>
          </div>
        </Card>
      </FullScreenContainer>
    </LoginStyle>
    </React.Fragment>
  );
}


const LoginStyle = styled.div`
  .social-buttons{
    display: flex;
    & div{
      display: flex;
      align-items: center;
      min-width: 175px;
      & img {
        margin-right: 0.5rem;
      }
      &:first-child{
        margin-right: 0.5rem;
      }
    }
  }
  .separator {
    position: relative;
    margin-top: 2rem;
    border-top: 1px solid #f2f2f2;
    div{
      font-family: "PanaGT–Regular";
      color: #666666;
      background-color: #fff;
      margin: auto;
      width: 3rem;
      text-align: center;
      position: absolute;
      left: calc(50% - 1.5rem);
      top: -10px;
    }
  }
`