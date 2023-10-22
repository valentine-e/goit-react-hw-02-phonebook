import React from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.number);
    this.resetForm();
  };

  render() {
    const nameInputId = nanoid();
    const numberInputId = nanoid();
    const { name, number } = this.state;
    const { handleSubmit, inputChange } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor={nameInputId}>
          Name
          <input
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            required
            onChange={inputChange}
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
            onChange={inputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
