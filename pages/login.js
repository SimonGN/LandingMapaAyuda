import React, { useState } from 'react';
import Router from 'next/router';
import Meta from '../components/Meta';
import Nav from '../components/Nav/Nav';
import { FullScreenContainer, Card, Button, Input, Checkbox } from '../components';
import googleLogo from '../static/svg/icon-google-login.svg';
import { login, setFetching } from '../redux/actions/auth';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import facebookLogo from '../static/img/icon-facebook.png';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AuthService from '../services/auth.service';
import ParagraphBodyRegular from '../styles/fontsStyles/ParagraphBodyRegular';
import _ from 'lodash';
import { withTranslation } from '../i18n';
import { withTheme } from 'styled-components';
import LoginStyle from '../styles/pageStyles/loginStyle';
import Link from 'next/link';

function Login({ t, theme }) {
	const [forgottenPassword, setForgottenPassword] = useState(false);
	const [forgottenPasswordEmail, setForgottenPasswordEmail] = useState(undefined);
	const { isFetching, error, user } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const authService = new AuthService();

	const handleLoginSubmit = values => {
		dispatch(login(values));
	};

	const handleRecoverPasswordSubmit = values => {
		dispatch(setFetching(true));
		authService.recoverPassword(values).then(() => {
			dispatch(setFetching(false));
			setForgottenPasswordEmail(values.email);
		});
	};

	const handleFacebookLogin = () => {
		console.log('Logged in via Facebook!');
	};

	const handleGoogleLogin = () => {
		console.log('Logged in via Google!');
	};

	const showLoginForm = () => (
		<React.Fragment>
			<div className='social-buttons'>
				<Button backgroundColor='rgba(234, 67, 53, 0.2)' color='#EA4335' light method={handleGoogleLogin}>
					<img src={googleLogo} />
					{t('Google')}
				</Button>
				<Button backgroundColor='rgba(71, 89, 147, 0.2)' color='#475993' light method={handleFacebookLogin}>
					<img src={facebookLogo} />
					{t('Facebook')}
				</Button>
			</div>
			<div className='separator'>
				<div>{t('separator')}</div>
			</div>
			<Formik
				initialValues={{
					email: '',
					password: '',
					rememberMe: false,
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.required(t('noEmail'))
						.email(t('invalidEmail')),
					password: Yup.string().required(t('noPassword')),
					rememberMe: Yup.boolean(),
				})}
				onSubmit={handleLoginSubmit}
			>
				{() => (
					<Form className='login-form'>
						<Input
							name='email'
							placeholder={t('email')}
							customError={error === 'wrong username' && t('wrongEmail')}
							isDisabled={isFetching}
						/>
						<Input
							type='password'
							name='password'
							placeholder={t('password')}
							customError={error === 'wrong password' && t('wrongPassword')}
							isDisabled={isFetching}
						/>
						<div className='bottom-section'>
							<Checkbox name='rememberMe' label={t('rememberMe')} />
							<span
								onClick={() => {
									setForgottenPassword(true);
									setForgottenPasswordEmail(undefined);
								}}
							>
								{t('forgottenPassword')}
							</span>
						</div>
						<Button
							backgroundColor={theme.colors.washedGreen}
							color={theme.colors.green}
							type='submit'
							width='100%'
							disabled={isFetching}
							light
						>
							{isFetching ? t('sending') : t('enter')}
						</Button>
					</Form>
				)}
			</Formik>
			<div className='form-bottom'>
				{t('notAccount')}
				<Link href='/register'>
					<span>{t('register')}</span>
				</Link>
			</div>
		</React.Fragment>
	);

	const showSendPasswordForm = () => (
		<React.Fragment>
			<Formik
				initialValues={{
					email: '',
				}}
				validationSchema={Yup.object().shape({
					email: Yup.string()
						.required(t('noEmail'))
						.email(t('invalidEmail')),
				})}
				onSubmit={(values, { resetForm }) => {
					handleRecoverPasswordSubmit(values);
					resetForm({ email: '' });
				}}
			>
				{() => (
					<Form>
						<Input name='email' placeholder={t('email')} />
						<Button
							backgroundColor={theme.colors.washedGreen}
							color={theme.colors.green}
							type='submit'
							width='100%'
							disabled={isFetching}
							light
						>
							{isFetching ? t('sending') : t('enter')}
						</Button>
					</Form>
				)}
			</Formik>
			<div className='form-bottom'>
				{forgottenPasswordEmail && (
					<ParagraphBodyRegular align='center' className='recover-password-message'>
						{t('sentMailTo')}
						{forgottenPasswordEmail}
						{t('withInstructions')}
					</ParagraphBodyRegular>
				)}
				<span onClick={() => setForgottenPassword(false)}>{t('goBack')}</span>
			</div>
		</React.Fragment>
	);

	if (!_.isEmpty(user)) {
		Router.push('/');
	}

	return (
		<React.Fragment>
			<Meta />
			<Nav />
			<FullScreenContainer>
				<LoginStyle>
					<h1 className='title'>{forgottenPassword ? t('recoverPassword') : t('hello')}</h1>
					<Card>
						{!forgottenPassword && showLoginForm()}
						{forgottenPassword && showSendPasswordForm()}
					</Card>
				</LoginStyle>
			</FullScreenContainer>
		</React.Fragment>
	);
}

Login.getInitialProps = async () => ({
	namespacesRequired: ['login'],
});

export default withTranslation('login')(withTheme(Login));
