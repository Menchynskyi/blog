import { HeaderStyled } from './HeaderStyled';
import { NavBar } from '../NavBar';

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <NavBar />
    </HeaderStyled>
  );
};
