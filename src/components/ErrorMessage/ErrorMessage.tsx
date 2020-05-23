import { ErrorContainer } from './ErrorMessageStyled';

type ErrorMessageProps = {
  color?: 'danger' | 'regular';
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  color,
}) => {
  return <ErrorContainer color={color}>{children}</ErrorContainer>;
};

ErrorMessage.defaultProps = {
  color: 'danger',
};
