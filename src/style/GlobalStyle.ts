import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamily.openSans}
  }

  html,body {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
`;

export default GlobalStyle;
