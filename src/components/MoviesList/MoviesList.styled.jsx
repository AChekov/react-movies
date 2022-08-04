import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled(Link)`
  width: 100%;
  flex-basis: calc(100% / 5 - 15px);
  padding: 5px;
  color: black;
  background: #fbf9fa3f;
  font-size: 18px;
  border-radius: 5px;
  & img {
    width: 100%;
  }
`;
