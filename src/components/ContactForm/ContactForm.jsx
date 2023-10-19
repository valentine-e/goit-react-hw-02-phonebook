import React from 'react';
import { nanoid } from 'nanoid';

const ContactForm = ({ name, number, onSubmit, onChange }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          id={nameInputId}
          type="text"
          name="name"
          value={name}
          required
          onChange={onChange}
        />
      </label>
      <label htmlFor={numberInputId}>
        Number
        <input
          id={numberInputId}
          type="tel"
          name="number"
          value={number}
          required
          onChange={onChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
