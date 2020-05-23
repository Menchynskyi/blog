import styled from 'styled-components';

export const PostContainer = styled.article`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.hoverOpacity};
  }

  & a {
    text-decoration: none;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.7em;
`;
