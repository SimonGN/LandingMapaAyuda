import React from "react";
import { useSelector } from 'react-redux';
import Meta from "../components/Meta";
import Nav from "../components/Nav/Nav";
import FullScreenContainer from '../styles/FullScreenContainer'

export default function Login() {
  const navHeight = useSelector(state => state.navHeight)
  return (
    <React.Fragment>
    <Meta/>
    <Nav/>
    <FullScreenContainer navHeight={navHeight}>
      <div className="login-container">
        <p>This is the loginn page</p>
      </div>
    </FullScreenContainer>
    </React.Fragment>
  );
}
