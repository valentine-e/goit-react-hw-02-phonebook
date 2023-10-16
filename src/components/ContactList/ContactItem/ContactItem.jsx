export const ContactItem = ({ contact: { name, number } }) => {
  return (
    <>
      <p>{name}:</p>
      <span>{number}</span>
    </>
  );
};
