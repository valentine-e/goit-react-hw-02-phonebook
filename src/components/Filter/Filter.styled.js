import styled from 'styled-components';

export const SearchInputBox = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  outline: 1px solid cornflowerblue;
  transition: outline 0.4s;
  border: none;

  &:hover,
  &:focus {
    outline: 2px solid cornflowerblue;
  }
`;
