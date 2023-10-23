import styled from 'styled-components';

export const List = styled.ul`
  margin: 30px 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;
  text-transform: uppercase;

  &:hover {
    transition: all 0.4s;
    color: white;
    background-color: cornflowerblue;
  }
`;
