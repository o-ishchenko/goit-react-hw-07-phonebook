import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';
import s from './App.module.css';


function App() {
  const [filter, setFilter] = useState('');
  
  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

    return (
      <div>
        <h2 className={s.title}>Phonebook</h2>
        <Form />
        <h2 className={s.title}>Contacts</h2>
         <Filter value={filter} onChange={changeFilter} />
        <ContactList filter={filter} />
        <ToastContainer autoClose={1500} position="top-center" />
      </div>
    );
  }


export default App;
