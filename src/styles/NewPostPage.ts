import styled, { css } from 'styled-components';

export const NewPostContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 840px;
  padding: 0 20px;
  margin: 40px auto;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-flow: column wrap;
`;

const inputStyle = css`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.text.large};
  box-shadow: ${({ theme }) => theme.boxShadow.main};

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
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.text.secondary : theme.colors.blue.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: none;
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  font-size: ${({ theme }) => theme.fontSize.text.large};
  color: ${({ theme }) => theme.colors.background.primary};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  transition: all 0.2s;

  &:hover {
    cursor: ${({ disabled }) => !disabled && 'pointer'};
    opacity: ${({ theme, disabled }) => !disabled && theme.hoverOpacity};
  }
`;
