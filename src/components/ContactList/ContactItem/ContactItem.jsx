export const ContactItem = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <>
      <p>{name}:</p>
      <span>{number}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};
