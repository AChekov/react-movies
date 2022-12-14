import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
`;

export const List = styled.ul`
  align-items: center;
  flex-wrap: wrap;
`;
export const Item = styled.li`
  width: 100%;
  height: 400px;
  flex-basis: calc(100% / 4 - 15px);
  padding: 5px;

  & img {
    width: 200px;
    max-height: 300px;
    object-fit: cover;
  }
`;

export const Data = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
`;
