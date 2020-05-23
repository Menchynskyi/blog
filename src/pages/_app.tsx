import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store, { wrapper } from '../store';
import { GlobalStyle, lightTheme } from '../theme';
import { Layout } from '../components';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
