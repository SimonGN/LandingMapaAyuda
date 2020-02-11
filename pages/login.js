import React from "react";
import Meta from "../components/Meta";
import Nav from "../components/Nav/Nav";
import styled from 'styled-components'
import { FullScreenContainer, Card, Button, Input } from '../components'
import googleLogo from '../static/svg/icon-google-login.svg'
import facebookLogo from '../static/img/icon-facebook.png'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';

export default function Login() {

  const handleSubmit = values => console.log(values)

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
                <Field type ="checkbox" checked={false}/>
                <span>¿Contraseña olvidada?</span>
                <Button
                  backgroundColor="#E4EBD2"
                  color="#76991E"
                  type="submit"
                  width="100%"
                >
                  Entrar
                </Button>
              </Form>)
            }
          </Formik>
          <div>
            ¿No tienes una cuenta? <span>¡Regístrate!</span>
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
    & button{
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

  .login-form {
    margin-top: 1rem;
  }
`