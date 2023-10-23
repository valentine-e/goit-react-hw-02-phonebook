import styled from 'styled-components';

export const ListItemName = styled.p`
  width: 30%;
`;

export const ListItemNumber = styled.span`
  width: 30%;
`;

export const ListItemButton = styled.button`
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  width: 100px;
  border: 1px solid cornflowerblue;
  text-transform: uppercase;
  transition: all 0.4s;
  color: cornflowerblue;

  &:hover {
    color: white;
    background-color: cornflowerblue;
  }
`;
