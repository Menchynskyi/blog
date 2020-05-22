import Head from 'next/head';
import { NextPage } from 'next';
import styled from 'styled-components';

export const StyledLol = styled.main`
  color: ${({ theme }) => theme.colors.blue.primary};
`;

const Home: NextPage = () => {
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
      <StyledLol>Blog</StyledLol>
    </div>
  );
};

export default Home;
