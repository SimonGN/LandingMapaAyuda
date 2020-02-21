import React from 'react';
import App from 'next/app';
import { appWithTranslation, i18n } from '../i18n';
import withReduxStore from '../redux/with-redux-store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

class MyApp extends App {
	render() {
		i18n.language ? (i18n.language = i18n.language) : 'es';
		const { Component, pageProps, reduxStore } = this.props;
		return (
			<Provider store={reduxStore}>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<Component {...pageProps} />
				</ThemeProvider>
			</Provider>
		);
	}
}

export default withReduxStore(appWithTranslation(MyApp));
