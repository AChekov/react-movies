import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  border-bottom: 1px solid black;
  padding: 30px;
`;

export const NavContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const NavLinkItem = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  &:first-of-type {
    margin-right: 30px;
  }
  &.active {
    color: orange;
  }
`;
