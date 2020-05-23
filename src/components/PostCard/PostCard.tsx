import Link from 'next/link';
import { Post } from '../../types';
import { PostContainer, Title, Content } from './PostCardStyled';
import { cutString } from '../../utils';

type PostCardProps = {
  post: Post;
};

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <PostContainer>
      <Link as={`/posts/${post.id}`} href="/posts/[postId]">
        <a>
          <Title>{post.title}</Title>
        </a>
      </Link>
      <Content>{cutString(post.body)}</Content>
    </PostContainer>
  );
};
