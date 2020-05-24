import { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import fp from 'lodash/fp';
import { fetchPosts } from '../actions';
import { RootState } from '../reducers';
import { PostCard, ErrorMessage } from '../components';
import { PostList, PostListItem } from '../styles';
import { Post } from '../types';

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
  if (loaded && postList.length === 0) {
    return <ErrorMessage color="regular">No posts yet.</ErrorMessage>;
  }
  if (!loaded) return null;

  const renderPostList = (postArr: Post[]) => {
    return fp.map((post: Post) => {
      return (
        <PostListItem key={post.id}>
          <PostCard post={post} />
        </PostListItem>
      );
    })(postArr);
  };

  return <PostList>{renderPostList(postList)}</PostList>;
};

export default Home;
