import React from "react";
import App from "next/app";
import { appWithTranslation, i18n } from "../i18n";
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';


class MyApp extends App {
  render() {
    i18n.language ? (i18n.language = i18n.language) : "es";
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withReduxStore(appWithTranslation(MyApp));
