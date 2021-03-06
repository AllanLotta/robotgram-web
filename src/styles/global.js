import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background: #fafafa;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
  }
  a {
    text-decoration: none !important;
    display: contents;
    :visited {
      color: unset;
    }
    :link {
      color: unset;
    }
  }

  ul {
    list-style: none;
  }
`;
