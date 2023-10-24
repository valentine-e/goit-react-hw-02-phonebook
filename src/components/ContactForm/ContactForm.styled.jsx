import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
`;

export const Label = styled.label`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 45%;
  text-transform: uppercase;
`;

export const Input = styled.input`
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

export const FormButton = styled.button`
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: cornflowerblue;
  color: white;
  outline: none;
  border: 1px solid cornflowerblue;
  margin: 30px 0px;
  transition: all 0.4s;

  &:hover,
  &:focus {
    color: cornflowerblue;
    background-color: white;
    border: 2px solid cornflowerblue;
  }
`;
