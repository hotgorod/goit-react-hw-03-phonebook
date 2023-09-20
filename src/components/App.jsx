import React from 'react';
import { nanoid } from 'nanoid'
import ContactList from "components/ContactList/ContactList";
import Filter from "components/Filter/Filter";
import ContactForm from './ContactForm/ContactForm';
// model.id = nanoid()


export const App = () => {

  return (<div>
    
      <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
  </div>
      
    );
  }