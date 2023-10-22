import { ContactItem } from '../ContactItem/ContactItem';
import { List, ListItem } from './ContactList.styled.js';

export const ContactList = ({ contactsList, onDelete }) => {
  return (
    <List>
      {contactsList.map(item => (
        <ListItem key={item.id}>
          <ContactItem contact={item} onDelete={onDelete} />
        </ListItem>
      ))}
    </List>
  );
};
