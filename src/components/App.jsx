import React,{ Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import { nanoid } from 'nanoid';

const load = () => {
  try {
    const serializedState = localStorage.getItem('contacts');
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

class App extends Component {
  state = {
    contacts: load() === undefined ? [] : load(),
    filter: '',
  };

  addNewContact = contact => {
    const newContact = { ...contact, id: nanoid() };

    const isDublicated = this.state.contacts.some(
      elem => elem.name === newContact.name
    );
    if (isDublicated) {
      return alert('Contact is alredy exsist');
    }

    localStorage.setItem(`contacts`, JSON.stringify(newContact));

    const parseData = JSON.parse(localStorage.getItem(`contacts`));

    this.setState({
      contacts: [...this.state.contacts, parseData],
    });
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(elem => elem.id !== contactId),
    });
  };

  findContact = name => {
    this.setState({
      filter: name.target.value,
    });
  };

  contactFilter = () => {
    return this.state.contacts.filter(({ name }) => {return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  }

  render() {
    const filteredContacts = this.contactFilter()
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter findContact={this.findContact} />
    <ContactList
    contactsList={filteredContacts}
    deleteContact={this.deleteContact} />
    {localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts))}
      </div>
    );
  }
}

export default App;
