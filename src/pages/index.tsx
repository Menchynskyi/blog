import { useEffect } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions';
import { RootState } from '../reducers';
import { PostCard, ErrorMessage } from '../components';
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
    <>
      {loaded && (
        <PostList>
          {postList.map((post, id) => (
            <PostListItem key={post.id}>
              <PostCard post={post} />
            </PostListItem>
          ))}
        </PostList>
      )}
    </>
  );
};

export default Home;
