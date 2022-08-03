import { Outlet } from 'react-router-dom';
import { AppContainer, NavContainer, NavLinkStyled } from './Layout.styled';

const Layout = () => {
  return (
    <AppContainer>
      <NavContainer>
        <NavLinkStyled to="/">Home</NavLinkStyled>
      </NavContainer>
      <Outlet />
    </AppContainer>
  );
};

export default Layout;
