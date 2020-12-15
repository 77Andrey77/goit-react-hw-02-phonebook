import React, { Component } from 'react';

import Form from '../Form/Form';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const shortid = require('shortid');

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    addContact = ({ name, number }) => {
        const contact = {
            id: shortid.generate(),
            name,
            number,
        };

        if (
            this.state.contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            )
        ) {
            alert(`${name} is already in contacts`);
        } else if (
            this.state.contacts.find(contact => contact.number === number)
        ) {
            alert(`${number} is alread in contacts`);
        } else {
            //распыляет в массив
            this.setState(({ contacts }) => ({
                contacts: [contact, ...contacts],
            }));
        }
    };

    onChangeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    visibleContacts = () => {
        const { filter, contacts } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    //удаление контактов
    deleteContact = contactId => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(
                contact => contact.id !== contactId,
            ),
        }));
    };

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <Form onSubmit={this.addContact} />

                <h2>Contacts</h2>
                <Filter
                    value={this.state.filter}
                    onChange={this.onChangeFilter}
                />
                <ContactList
                    contacts={this.visibleContacts()}
                    onDeleteContact={this.deleteContact}
                />
            </div>
        );
    }
}

export default App;
