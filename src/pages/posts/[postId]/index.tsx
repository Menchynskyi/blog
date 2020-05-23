import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import { Layout, ErrorMessage } from '../../../components';
import { getPostById, resetCurrentPost } from '../../../actions';
import { RootState } from '../../../reducers';
import {
  PostContainer,
  PostTitle,
  CommentList,
  CommentListItem,
  PostBody,
} from '../../../styles';

const PostPage: NextPage = () => {
  const router = useRouter();
  const { postId } = router.query;

  const dispatch = useDispatch();
  const { post, loaded, error } = useSelector(({ posts }: RootState) => {
    return {
      post: posts.currentPost,
      loaded: posts.currentPostLoaded,
      error: posts.currentPostError,
    };
  });

  useEffect(() => {
    if (postId) {
      dispatch(getPostById(postId as string));
    }
    return () => {
      dispatch(resetCurrentPost());
    };
  }, [postId]);

  if (error) return <ErrorMessage>Something went wrong...</ErrorMessage>;

  return (
    <>
      {loaded && (
        <PostContainer>
          <PostTitle>{post.title}</PostTitle>
          <PostBody>{post.body}</PostBody>
          <CommentList>
            {post.comments.map(({ id, body }) => (
              <CommentListItem key={id}>
                <img src="/user.png" alt="user" />
                <span>{body}</span>
              </CommentListItem>
            ))}
          </CommentList>
        </PostContainer>
      )}
    </>
  );
};

export default PostPage;
