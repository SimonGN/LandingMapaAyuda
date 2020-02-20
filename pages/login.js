import React, { useState } from "react";
import Router from 'next/router'
import Meta from "../components/Meta";
import Nav from "../components/Nav/Nav";
import styled from 'styled-components'
import { FullScreenContainer, Card, Button, Input, Checkbox } from '../components'
import googleLogo from '../static/svg/icon-google-login.svg'
import { login, setFetching } from '../redux/actions/auth'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import facebookLogo from '../static/img/icon-facebook.png'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import AuthService from '../services/auth.service' 
import ParagraphBodyRegular from '../styles/fontsStyles/ParagraphBodyRegular'
import _ from 'lodash';
import { withTranslation } from '../i18n'
import { withTheme } from 'styled-components'

function Login({t, theme}) {
  
  const [forgottenPassword, setForgottenPassword] = useState(false)
  const [forgottenPasswordEmail, setForgottenPasswordEmail] = useState(undefined)
  const { isFetching, error, user } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  const authService = new AuthService()

  const handleLoginSubmit = values => {
    dispatch(login(values))
  }
  
  const handleRecoverPasswordSubmit = values => {
    dispatch(setFetching(true))
    authService.recoverPassword(values)
      .then(() => {
        dispatch(setFetching(false))
        setForgottenPasswordEmail(values.email)
      })
  }

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
        {t("Google")}
      </Button>
      <Button
        backgroundColor="rgba(71, 89, 147, 0.2)"
        color="#475993"
        light
        method={handleFacebookLogin}
      >
        <img src={facebookLogo}/>
        {t("Facebook")}
      </Button>
    </div>
    <div className="separator">
      <div>{t('separator')}</div>
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
            .required(t("noEmail"))
            .email(t("invalidEmail")),
          password: Yup.string()
            .required(t("noPassword")),
          rememberMe: Yup.boolean()
        })
      }
      onSubmit={handleLoginSubmit}
    >
      {() => 
        (<Form className="login-form">
          <Input 
            name="email" 
            placeholder={t("email")}
            customError={error==='wrong username' && t('wrongEmail')}
            isDisabled={isFetching}
          />
          <Input 
            type="password" 
            name="password" 
            placeholder={t("password")} 
            customError={error==='wrong password' && t('wrongPassword')}
            isDisabled={isFetching}
          />
          <div className="bottom-section">
            <Checkbox name="rememberMe" label={t('rememberMe')}/>
            <span
              onClick={()=>{
                setForgottenPassword(true)
                setForgottenPasswordEmail(undefined)
              }}
            >{t('forgottenPassword')}</span>
          </div>
          <Button
            backgroundColor={theme.colors.washedGreen}
            color={theme.colors.green}
            type="submit"
            width="100%"
            disabled={isFetching}
            light
          >
            {isFetching? t('sending') : t('enter')}
          </Button>
        </Form>)
      }
    </Formik>
    <div className="form-bottom">
    {t('notAccount')}<span>{t('register')}</span>
    </div>
  </React.Fragment>)

  const showSendPasswordForm = () => (<React.Fragment>
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema = {
        Yup.object().shape({
          email: Yup.string()
            .required(t('noEmail'))
            .email(t('invalidEmail'))
        })
      }
      onSubmit={(values, {resetForm})=> {
        handleRecoverPasswordSubmit(values)
        resetForm({email: ""})
      }}
    >
      {() => 
        (<Form>
          <Input name="email" placeholder={t('email')}/>
          <Button
            backgroundColor={theme.colors.washedGreen}
            color={theme.colors.green}
            type="submit"
            width="100%"
            disabled={isFetching}
            light
          >
            {isFetching? t('sending'):t('enter')}
          </Button>
        </Form>)}
    </Formik>
    <div className="form-bottom">
      {forgottenPasswordEmail && <ParagraphBodyRegular 
        align='center' 
        className='recover-password-message'
      >
        {t('sentMailTo')}{forgottenPasswordEmail}{t('withInstructions')}
      </ParagraphBodyRegular>}
      <span
        onClick={()=>setForgottenPassword(false)}
      >{t('goBack')}</span>
    </div>
  </React.Fragment>)

  if(!_.isEmpty(user)){
    Router.push('/')
  }

  return (
    <React.Fragment>
    <Meta/>
    <Nav/>
    <FullScreenContainer>
      <LoginStyle>
        <h1 className="title">{forgottenPassword? t('recoverPassword') : t('hello')}</h1>
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
      color: ${({theme}) => theme.colors.turquoise};
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
    border-top: 1px solid ${({theme}) => theme.colors.dark05};
    div{
      font-size: 12px;
      font-family: "PanaGT–Regular";
      color: ${({theme}) => theme.colors.dark60};
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
        color:  ${({theme}) => theme.colors.dark40};
        font-size: 12px;
        font-family: "PanaGT–Regular";
        cursor: pointer;
        &:hover{
          color: ${({theme}) => theme.colors.green};
          text-decoration: underline;
        }
      }
    }
  }

  .form-bottom{
    margin-top: 1rem;
    text-align: center;
    color: ${({theme}) => theme.colors.dark60};
    font-family: "PanaGT–Regular";
    font-size: 12px;
    & .recover-password-message{
      margin-bottom: 1rem;
    }
    & span {
      color: ${({theme}) => theme.colors.green};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

Login.getInitialProps = async () => ({
  namespacesRequired: ["login"]
});

export default withTranslation('login')(withTheme(Login))