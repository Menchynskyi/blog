import { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { NextPage, GetServerSideProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions';
import { RootState } from '../reducers';

export const Main = styled.main`
  color: ${({ theme }) => theme.colors.blue.primary};
`;

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const postList = useSelector(({ posts }: RootState) => {
    return posts.postList;
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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
      <Main>Blog</Main>
    </div>
  );
};

export default Home;
