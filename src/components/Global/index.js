import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    word-wrap: break-word;
    font-family: "Inter", sans-serif;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8a2ae1;
    min-height: 100vh;
    height: 100%;
  }
`;

export default GlobalStyles;
