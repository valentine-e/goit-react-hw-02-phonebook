import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ contactsList, onDelete }) => {
  return (
    <ul>
      {contactsList.map(item => (
        <li key={item.id}>
          <ContactItem contact={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};
