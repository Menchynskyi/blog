import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { NextPage } from 'next';
import fp from 'lodash/fp';
import { ErrorMessage } from '../../../components';
import { getPostById, resetCurrentPost } from '../../../actions';
import { RootState } from '../../../reducers';
import {
  PostContainer,
  PostTitle,
  CommentList,
  CommentListItem,
  PostBody,
} from '../../../styles';
import { Comment } from '../../../types';

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
  if (!loaded) return null;

  const renderCommentList = (commentList: Comment[]) => {
    return fp.map(({ id, body }: Comment) => (
      <CommentListItem key={id}>
        <img src="/user.png" alt="user" />
        <span>{body}</span>
      </CommentListItem>
    ))(commentList);
  };

  return (
    <PostContainer>
      <PostTitle>{post.title}</PostTitle>
      <PostBody>{post.body}</PostBody>
      {post.comments.length > 0 && (
        <CommentList>{renderCommentList(post.comments)}</CommentList>
      )}
    </PostContainer>
  );
};

export default PostPage;
