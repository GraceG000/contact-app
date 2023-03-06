import React , { useState } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
const [contacts, setContacts] = useState([]);

 /*
  const contacts = [
{
  id: "1",
  name:"Adrien Agreste",
  email:"adriag34@gmail.com",
},

{
  id:"2",
  name: "Marinette Dupain-Cheng",
  email:"maridu98@gmail.com",
}
  ];*/
const addContactHandler = (contact) => {
  console.log(contact);
  setContacts([...contacts, contact]);
}
  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
