import styled, { css } from 'styled-components';

export const NewPostContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 800px;
  margin: 40px auto;
`;

const inputStyle = css`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const TitleField = styled.input`
  ${inputStyle}
`;

export const BodyField = styled.textarea`
  ${inputStyle}
  resize: none;
`;

export const SumbitButton = styled.button`
  width: 100%;
  padding: 12px 15px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.blue.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  color: ${({ theme }) => theme.colors.background.primary};
  transition: all 0.2s;
  letter-spacing: ${({ theme }) => theme.letterSpacing};

  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;