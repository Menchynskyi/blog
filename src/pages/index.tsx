import { useEffect } from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions';
import { RootState } from '../reducers';
import { Layout, PostCard, ErrorMessage } from '../components';
import { PostList, PostListItem } from '../styles';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const { postList, loaded, error } = useSelector(({ posts }: RootState) => {
    return {
      postList: posts.postList,
      loaded: posts.postListLoaded,
      error: posts.postListError,
    };
  });

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (error) return <ErrorMessage>Something went wrong...</ErrorMessage>;

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
      <Layout>
        {loaded && (
          <PostList>
            {postList.map((post, id) => (
              <PostListItem key={post.id}>
                <PostCard post={post} />
              </PostListItem>
            ))}
          </PostList>
        )}
      </Layout>
    </div>
  );
};

export default Home;
