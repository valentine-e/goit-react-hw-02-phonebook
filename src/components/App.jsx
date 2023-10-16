import ContactForm from './ContactForm/ContactForm';
import { Component } from 'react';
import contactsData from './data/data.json';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter.jsx';

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

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onSubmit={this.onSubmitHandler}
          onChange={this.inputChange}
        />

        <Filter filter={filter} onFilterType={this.changeSearchInput} />
        <ContactList contactsList={contacts} />
      </div>
    );
  }
}

export default App;
