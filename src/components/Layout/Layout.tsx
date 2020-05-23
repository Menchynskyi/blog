import { MainContainer } from './LayoutStyled';
import { Header } from '../Header';

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
};
