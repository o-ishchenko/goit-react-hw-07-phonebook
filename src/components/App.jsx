import React, { useState } from 'react';
import s from './App.module.css';
import Form from './Form';
import Filter from './Filter';
import ContactList from './ContactList';


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
        <ContactList filter={filter}/>
      </div>
    );
  }


export default App;
