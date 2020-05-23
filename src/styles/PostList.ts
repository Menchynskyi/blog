import styled from 'styled-components';

export const PostList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 40px 0 0 0;
`;

export const PostListItem = styled.li`
  margin: 0;
  padding: 0 20px 20px 20px;
  list-style: none;
  max-width: 50%;
  width: 50%;
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.secondary};

  &:last-of-type,
  &:nth-last-of-type(2) {
    border-bottom: none;
  }
`;
