import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  .heading {
    font-family: 'Helvetica', sans-serif;
    color: red;
  }

  .input {
    padding: 10px;
  }

  .todoList {
    padding: 0;
    margin: 0;
  }

  .todoInput {
    display: flex;
    gap: 10px;
    margin-bottom: 2rem;
  }

  .todo {
    display: flex;
    max-width: 250px;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 5px 10px;
    align-items: center;
  }
`

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>)
}