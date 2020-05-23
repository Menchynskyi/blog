import Link from 'next/link';
import { NavList, NavItem } from './NavBarStyled';

export const NavBar: React.FC = () => {
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/posts/new">
            <a>Create post</a>
          </Link>
        </NavItem>
      </NavList>
    </nav>
  );
};
