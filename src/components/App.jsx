import ContactForm from './ContactForm/ContactForm';
import { Component } from 'react';
import contactsData from './data/data.json';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter.jsx';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: contactsData,
    filter: '',
    name: '',
    number: '',
  };

  changeSearchInput = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  inputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  createNewContact = () => {
    const { contacts, name, number } = this.state;
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const newName = newContact.name;

    if (
      contacts.find(item => item.name.toLowerCase() === newName.toLowerCase())
    ) {
      alert(newName + ' is already in contacts!');
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.createNewContact();
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
      );
    });
  };

  deleteContactItem = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getFilteredContacts();

    return (
      <div>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onSubmit={this.handleSubmit}
          onChange={this.inputChange}
        />

        <Filter filter={filter} onFilterType={this.changeSearchInput} />
        <ContactList
          contactsList={visibleContacts}
          onDelete={this.deleteContactItem}
        />
      </div>
    );
  }
}

export default App;
