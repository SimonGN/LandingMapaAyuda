import { createGlobalStyle } from 'styled-components';
import GTMedium from '../static/fonts/GT-Walsheim-Pro-Medium.woff2';
import GTRegular from '../static/fonts/GT-Walsheim-Pro-Regular.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "GT–Medium";
  src: url('${GTMedium}') format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "GT-Regular";
    src: url('${GTRegular}') format("woff2");
    font-weight: normal;
    font-style: normal;
  }

  body, p, h1, h2, h3 {
    margin: 0;
    padding: 0;
    max-width: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body, html {
    max-width: 100vw;
  }

  html {
    font-family: "GT-Regular";
  }

`;

export default GlobalStyle;
