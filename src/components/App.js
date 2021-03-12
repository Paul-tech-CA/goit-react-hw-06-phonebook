import React, { Component } from 'react';
import style from './App.module.css';
import ContactForm from './contactForm/ContactForm.jsx';
import ContactsList from './contactsList/ContactsList';
import { v4 as uuidv4 } from 'uuid';
import FilterList from './filterList/FilterList';

class App extends Component {
  state = {
    contactList: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    if (this.state.contactList.some(item => item.name === contact.name)) {
      alert('This contact is already exist!! Try one more time, please!');
      return;
    }
    this.setState(prevState => ({
      contactList: [...prevState.contactList, { ...contact, id: uuidv4() }],
    }));
  };

  onHandleRemove = id => {
    this.setState(prevState => {
      const idx = prevState.contactList.findIndex(item => item.id === id);
      const contactList = [
        ...prevState.contactList.slice(0, idx),
        ...prevState.contactList.slice(idx + 1),
      ];

      return { contactList };
    });
  };

  getFilteredContacts() {
    return this.state.contactList.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  }

  onFilterHandleChange = filter => {
    this.setState({ filter });
  };

  componentDidMount() {
    const contactList = localStorage.getItem('contactList');
    const parsedContactList = JSON.parse(contactList);
    if (parsedContactList) {
      this.setState({ contactList: parsedContactList });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contactList !== prevState.contactList) {
      localStorage.setItem(
        'contactList',
        JSON.stringify(this.state.contactList),
      );
    }
  }

  render() {
    const visibleContacts = this.getFilteredContacts();
    return (
      <div className={style.container}>
        <h2> Phonebook </h2> <ContactForm addContact={this.addContact} />
        <h2> Contacts </h2>
        <FilterList
          filter={this.state.filter}
          onFilterHandleChange={this.onFilterHandleChange}
        />
        <ContactsList
          contactList={visibleContacts}
          onHandleRemove={this.onHandleRemove}
        />
      </div>
    );
  }
}

export default App;
