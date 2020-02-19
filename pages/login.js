import React, { useState } from "react";
import Meta from "../components/Meta";
import Nav from "../components/Nav/Nav";
import styled from 'styled-components'
import { FullScreenContainer, Card, Button, Input, Checkbox } from '../components'
import googleLogo from '../static/svg/icon-google-login.svg'
import facebookLogo from '../static/img/icon-facebook.png'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

export default function Login() {

  const [forgottenPassword, setForgottenPassword] = useState(false)
  const handleSubmit = values => console.log(values)
  const handleFacebookLogin = () => {
    console.log("Logged in via Facebook!")
  }
  const handleGoogleLogin = () => {
    console.log("Logged in via Google!")
  }

  const showLoginForm = () =>  (<React.Fragment>
    <div className="social-buttons">
      <Button
        backgroundColor="rgba(234, 67, 53, 0.2)"
        color="#EA4335"
        light
        method={handleGoogleLogin}
      >
        <img src={googleLogo}/>
        Google
      </Button>
      <Button
        backgroundColor="rgba(71, 89, 147, 0.2)"
        color="#475993"
        light
        method={handleFacebookLogin}
      >
        <img src={facebookLogo}/>
        Facebook
      </Button>
    </div>
    <div className="separator">
      <div>o</div>
    </div>
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false
      }}
      validationSchema = {
        Yup.object().shape({
          email: Yup.string()
            .required("Escribe un correo electrónico")
            .email("Correo electrónico no válido"),
          password: Yup.string()
            .required("Escribe la contraseña"),
          rememberMe: Yup.boolean()
        })
      }
      onSubmit={handleSubmit}
    >
      {() => 
        (<Form className="login-form">
          <Input name="email" placeholder="Correo electrónico"/>
          <Input type="password" name="password" placeholder="Contraseña"/>
          <div className="bottom-section">
            <Checkbox name="rememberMe" label="Recuérdame"/>
            <span
              onClick={()=>setForgottenPassword(true)}
            >¿Contraseña olvidada?</span>
          </div>
          <Button
            backgroundColor="#E4EBD2"
            color="#76991E"
            type="submit"
            width="100%"
            light
          >
            Entrar
          </Button>
        </Form>)
      }
    </Formik>
    <div className="form-bottom">
      ¿No tienes una cuenta? <span>¡Regístrate!</span>
    </div>
  </React.Fragment>)

  const showSendPasswordForm = () => (<React.Fragment>
    <Formik
      initialValues={{
        password: ""
      }}
      validationSchema = {
        Yup.object().shape({
          email: Yup.string()
            .required("Escribe un correo electrónico")
            .email("Correo electrónico no válido")
        })
      }
      onSubmit={handleSubmit}
    >
      {() => 
        (<Form>
          <Input name="email" placeholder="Correo electrónico"/>
          <Button
            backgroundColor="#E4EBD2"
            color="#76991E"
            type="submit"
            width="100%"
            light
          >
            Entrar
          </Button>
        </Form>)}
    </Formik>
    <div className="form-bottom">
      <span
        onClick={()=>setForgottenPassword(false)}
      >Volver atras</span>
    </div>
  </React.Fragment>)

  return (
    <React.Fragment>
    <Meta/>
    <Nav/>
    <FullScreenContainer>
      <LoginStyle>
        <h1 className="title">{forgottenPassword? "Recupera tu contraseña" : "¡Hola otra vez!"}</h1>
        <Card>
          { !forgottenPassword && showLoginForm() }
          { forgottenPassword && showSendPasswordForm() }
        </Card>
      </LoginStyle>
    </FullScreenContainer>
    </React.Fragment>
  );
}


const LoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 384px;
  width: 384px;
  & .title{
      text-align: center;
      margin-bottom: 2rem;
      font-size: 32px;
      color: #54C39F;
      font-family: "PanaGT–Regular";
    }
  .social-buttons{
    display: flex;
    justify-content: space-between;
    & button{
      display: flex;
      align-items: center;
      width: calc(50% - 0.25rem);
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
      font-size: 12px;
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

  .login-form {
    margin-top: 1rem;
    & .bottom-section {
      display: flex;
      justify-content: space-between;
      margin: 1rem 1rem 1.5rem 1rem;
      & span {
        color: #999999;
        font-size: 12px;
        font-family: "PanaGT–Regular";
        cursor: pointer;
        &:hover{
          color: #76991E;
          text-decoration: underline;
        }
      }
    }
  }

  .form-bottom{
    margin-top: 1rem;
    text-align: center;
    color: #666666;
    font-family: "PanaGT–Regular";
    font-size: 12px;
    & span {
      color: #76991E;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`