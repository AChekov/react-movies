import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  padding: 50px;
`;

export const NavContainer = styled.div`
  padding: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  &:first-of-type {
    margin-right: 30px;
  }
  &.active {
    color: orange;
  }
`;
