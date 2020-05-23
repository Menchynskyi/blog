import Head from 'next/head';
import { MainContainer } from './LayoutStyled';
import { Header } from '../Header';

export const Layout: React.FC = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <MainContainer>{children}</MainContainer>
    </div>
  );
};
