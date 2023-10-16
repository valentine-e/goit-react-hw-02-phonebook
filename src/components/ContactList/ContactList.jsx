import { ContactItem } from './ContactItem/ContactItem';

export const ContactList = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(item => (
        <li key={item.id}>
          <ContactItem contact={item} />
        </li>
      ))}
    </ul>
  );
};
