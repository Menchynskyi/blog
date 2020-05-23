import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, ErrorMessage } from '../../../components';
import { getPostById, resetCurrentPost } from '../../../actions';
import { RootState } from '../../../reducers';

const PostId = () => {
  const { query } = useRouter();

  const dispatch = useDispatch();
  const { post, loaded, error } = useSelector(({ posts }: RootState) => {
    return {
      post: posts.currentPost,
      loaded: posts.currentPostLoaded,
      error: posts.currentPostError,
    };
  });

  useEffect(() => {
    if (query.postId) {
      dispatch(getPostById(query.postId as string));
    }
    return () => {
      dispatch(resetCurrentPost());
    };
  }, [query.postId]);

  if (error) return <ErrorMessage>Something went wrong...</ErrorMessage>;

  return <Layout>{}</Layout>;
};

export default PostId;
