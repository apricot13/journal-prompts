import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    background-color: #F3E8E4;
    color: #5B5652;
  }


  a {
    color: #3C3F3B;
    text-decoration: underline;
  }

  a:hover {
    color: #B29984;
  }



`;

export default GlobalStyle;