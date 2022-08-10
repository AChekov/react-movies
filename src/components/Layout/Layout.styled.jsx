import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 30px;
`;

export const NavContainer = styled.header`
  padding: 10px;
  border-bottom: 1px solid black;
`;

export const NavLinkItem = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  &:first-of-type {
    margin-right: 30px;
  }
  &.active {
    color: orange;
    border-bottom: 2px solid blue;
    border-radius: 5px;
  }
`;
