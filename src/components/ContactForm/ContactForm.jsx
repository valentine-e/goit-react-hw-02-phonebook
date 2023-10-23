import React from 'react';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form, Label, Input, FormButton } from './ContactForm.styled';

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
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            id={nameInputId}
            type="text"
            name="name"
            value={name}
            required
            onChange={inputChange}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <Input
            id={numberInputId}
            type="tel"
            name="number"
            value={number}
            required
            onChange={inputChange}
          />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }
}

export default ContactForm;
