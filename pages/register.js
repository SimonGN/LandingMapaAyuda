import React, { useState } from 'react';
import Router from 'next/router';
import Meta from '../components/Meta';
import Nav from '../components/Nav/Nav';
import { FullScreenContainer, Card, Button, Input } from '../components';
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

function Register({ t, theme }) {
	const [step, setStep] = useState(0);
	const [pushed, setPushed] = useState(false);
	const { isFetching, error, user } = useSelector(state => state.auth);

	const handleFacebookRegister = () => {
		console.log('Registered via Facebook!');
	};

	const handleGoogleRegister = () => {
		console.log('Registered via Google!');
	};

	const handleRegisterSubmit = values => {
		console.log(values);
	};

	const showWelcomeScreen = () => (
		<React.Fragment>
			<div className='social-buttons'>
				<Button backgroundColor='rgba(234, 67, 53, 0.2)' color='#EA4335' light method={handleGoogleRegister}>
					<img src={googleLogo} />
					{t('Google')}
				</Button>
				<Button backgroundColor='rgba(71, 89, 147, 0.2)' color='#475993' light method={handleFacebookRegister}>
					<img src={facebookLogo} />
					{t('Facebook')}
				</Button>
			</div>
			<div className='separator'>
				<div>{t('separator')}</div>
			</div>
			<div className='form-bottom'>
				<span onClick={() => setStep(1)}>{t('emailRegister')}</span>
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
					<h1 className='title'>{t('welcome')}</h1>
					<Card>
						{step === 0 && showWelcomeScreen()}
						<Formik
							validateOnMount
							initialValues={{
								name: '',
								email: '',
								password: '',
							}}
							validationSchema={Yup.object().shape({
								name: Yup.string().required(t('nameRequired')),
								email: Yup.string()
									.required(t('emailRequired'))
									.email(t('emailInvalid')),
								password: Yup.string()
									.required(t('passwordRequired'))
									.min(6, t('passwordLength')),
								repeatPassword: Yup.string()
									.required(t('repeatPasswordRequired'))
									.min(6, t('passwordLength'))
									.oneOf([Yup.ref('password'), null], t('passwordsMatch')),
							})}
							onSubmit={handleRegisterSubmit}
						>
							{({ errors, validateForm }) => (
								<Form>
									{step === 1 && (
										<React.Fragment>
											<div className='top-section'>
												{t('nameTitle')} <span>1/3</span>
											</div>
											<Input name='name' placeholder={t('namePlaceholder')} customError={pushed && errors.name} />
											<Button
												backgroundColor={theme.colors.washedGreen}
												color={theme.colors.green}
												size='1rem'
												width='100%'
												light
												method={() => {
													setPushed(true);
													validateForm().then(() => {
														if (!errors.name) {
															setStep(2);
															setPushed(false);
														}
													});
												}}
											>
												{t('continue')}
											</Button>
										</React.Fragment>
									)}
									{step === 2 && (
										<React.Fragment>
											<div className='top-section'>
												{t('emailTitle')} <span>2/3</span>
											</div>
											<Input name='email' placeholder={t('emailPlaceholder')} customError={pushed && errors.email} />
											<Button
												backgroundColor={theme.colors.washedGreen}
												color={theme.colors.green}
												size='1rem'
												width='100%'
												light
												method={() => {
													setPushed(true);
													validateForm().then(() => {
														if (!errors.email) {
															setStep(3);
															setPushed(false);
														}
													});
												}}
											>
												{t('continue')}
											</Button>
										</React.Fragment>
									)}
									{step === 3 && (
										<React.Fragment>
											<div className='top-section'>
												{t('passwordTitle')} <span>3/3</span>
											</div>
											<Input name='password' type='password' placeholder={t('passwordPlaceholder')} />
											<Input name='repeatPassword' type='password' placeholder={t('repeatPasswordPlaceholder')} />
											<Button
												backgroundColor={theme.colors.washedGreen}
												color={theme.colors.green}
												size='1rem'
												width='100%'
												light
												type='submit'
											>
												{t('register')}
											</Button>
										</React.Fragment>
									)}
								</Form>
							)}
						</Formik>
						{step !== 0 && (
							<div className='form-bottom'>
								{t('alreadyAccount')}
								<Link href='/login'>
									<span>{t('enter')}</span>
								</Link>
							</div>
						)}
					</Card>
				</LoginStyle>
			</FullScreenContainer>
		</React.Fragment>
	);
}

Register.getInitialProps = async () => ({
	namespacesRequired: ['register'],
});

export default withTranslation('register')(withTheme(Register));
