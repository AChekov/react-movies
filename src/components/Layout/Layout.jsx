import { Outlet } from 'react-router-dom';
import { AppContainer, NavContainer, NavLinkItem } from './Layout.styled';

const navLinkItem = [
  { href: '/', text: 'HOME' },
  { href: 'movies', text: 'MOVIES' },
];

const Layout = () => {
  return (
    <AppContainer>
      <NavContainer>
        {navLinkItem.map(({ href, text }) => (
          <NavLinkItem to={href} key={href}>
            {text}
          </NavLinkItem>
        ))}
      </NavContainer>
      <Outlet />
    </AppContainer>
  );
};

export default Layout;
