import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;  
  }  
  html, body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background.primary};
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
    color: ${({ theme }) => theme.colors.text.primary};
  }
  html {
    overflow-y: scroll;

    & ::selection {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.background.primary};
      text-shadow: none;
    }

    & ::-moz-selection {
      background-color: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.background.primary};
      text-shadow: none;
    }
  }
`;
