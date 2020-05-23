import styled from 'styled-components';

export const PostContainer = styled.article`
  display: flex;
  flex-flow: column wrap;
  max-width: 840px;
  padding: 0 20px;
  margin: 40px auto;
`;

export const PostTitle = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.heading.large};
  font-weight: 500;
  line-height: 1.7em;
`;

export const PostBody = styled.div`
  padding-bottom: 20px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.text.large};
  line-height: 1.7em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.secondary};
`;

export const CommentList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const CommentListItem = styled.li`
  display: flex;
  align-items: flex-end;
  padding: 20px;
  list-style: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  line-height: 1.7em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.secondary};

  &:last-of-type {
    border-bottom: none;
  }

  & img {
    align-self: flex-start;
    height: 36px;
    margin-right: 30px;
  }
`;
