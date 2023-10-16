import React from 'react';
import { nanoid } from 'nanoid';

// import { Formik, Field, Form } from 'formik';

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
      <button>Add contact</button>
    </form>

    // <Formik
    //   initialValues={{
    //     name: '',
    //     number: '',
    //     email: '',
    //   }}
    //   onSubmit={values => {
    //     console.log(values);
    //   }}
    // >
    //   <Form>
    //     <label htmlFor="name">First Name</label>
    //     <Field id="name" name="name" placeholder="Name" />

    //     <label htmlFor="number">Last Name</label>
    //     <Field id="number" name="number" placeholder="Number" />

    //     <button type="submit">Submit</button>
    //   </Form>
    // </Formik>
  );
};

export default ContactForm;
