import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.colors.navy};
  color: ${props => (props.whiteColor ? 'white' : 'black')};
  font-family: ${props => props.theme.fontFamily};
}`

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle whiteColor />
    </ThemeProvider>)
}