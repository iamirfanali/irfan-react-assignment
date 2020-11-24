import { createGlobalStyle } from 'styled-components';
import { globals } from '../settings';

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family:${globals.baseFontFamily};
  }
`;
