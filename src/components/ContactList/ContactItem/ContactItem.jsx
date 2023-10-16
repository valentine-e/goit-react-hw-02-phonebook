export const ContactItem = ({ contact }) => {
  return (
    <>
      <p>{contact.name}:</p>
      <span>{contact.number}</span>
    </>
  );
};
