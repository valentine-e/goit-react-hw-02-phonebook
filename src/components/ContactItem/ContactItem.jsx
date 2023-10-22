import {
  ListItemName,
  ListItemNumber,
  ListItemButton,
} from './ContactItem.styled';

export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <ListItemName>{name}:</ListItemName>
      <ListItemNumber>{number}</ListItemNumber>
      <ListItemButton onClick={() => onDelete(id)}>Delete</ListItemButton>
    </>
  );
};
