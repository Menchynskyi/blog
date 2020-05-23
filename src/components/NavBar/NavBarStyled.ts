import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
`;

export const NavItem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;

  & a {
    color: ${({ theme }) => theme.colors.background.primary};
    font-size: ${({ theme }) => theme.fontSize.text.small};
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.letterSpacing};
    transition: all 0.2s;

    &:hover {
      opacity: ${({ theme }) => theme.hoverOpacity};
    }
  }
`;
