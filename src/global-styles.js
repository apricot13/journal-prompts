import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
    background-color: #f1f1f1;
    color: #2e2922;
  }


  a {
    color: #10752a;
    text-decoration: none;
  }

  a:hover {
    color: #0a471a;
  }



`;

export default GlobalStyle;