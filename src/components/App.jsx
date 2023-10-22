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
  };

  changeSearchInput = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  createNewContact = (name, number) => {
    const { contacts } = this.state;
    let newContact = {
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
    const {
      getFilteredContacts,
      createNewContact,
      changeSearchInput,
      deleteContactItem,
    } = this;

    const visibleContacts = getFilteredContacts();

    return (
      <div>
        <ContactForm onAdd={createNewContact} />

        <Filter filter={filter} onFilterType={changeSearchInput} />
        <ContactList
          contactsList={visibleContacts}
          onDelete={deleteContactItem}
        />
      </div>
    );
  }
}

export default App;
