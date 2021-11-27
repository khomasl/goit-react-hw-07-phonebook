import './App.css'
import * as React from 'react'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { contactsApi } from './redux/contacts/contactsSlice'
import ContactForm from './components/ContactForm/ContactForm'
import ContactsList from './components/ContactsList/ContactsList'
import Filter from './components/Filter/Filter'

export default function App() {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <div className="App-Contacts">
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </div>
  )
}
