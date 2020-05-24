import styled from 'styled-components';

type ErrorContainerProps = {
  color: 'regular' | 'danger';
};

export const ErrorContainer = styled.div<ErrorContainerProps>`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.fontSize.heading.large};
  text-align: center;
  color: ${({ color, theme }) =>
    color === 'danger' ? theme.colors.red : theme.colors.text.primary};
`;
