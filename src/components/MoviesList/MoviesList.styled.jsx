import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px 10px;
`;

export const Item = styled(Link)`
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  flex-basis: calc(100% / 5 - 15px);
  padding: 5px;
  color: black;
  background: rgba(0, 0, 255, 0.1);
  font-size: 18px;
  border-radius: 5px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.03);
  }
  & img {
    width: 100%;
  }
`;
