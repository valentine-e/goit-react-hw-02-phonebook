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
  width: 140px;
  border: 1px solid currentColor;
  text-transform: uppercase;
  transition: all 0.4s;

  &:hover {
    color: cornflowerblue;
  }
`;
