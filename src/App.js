import { useEffect, useState } from "react";
import "./App.css";
import AddContacts from "./Components/AddContact";
import ContactList from "./Components/ContactList";
import Header from "./Components/Header";
import uuid4 from "uuid4";

function App() {
  const localStorageKey = "contact"
  const [contact,setContact]= useState(()=>{
    return JSON.parse( localStorage.getItem(localStorageKey) )
  })



  useEffect(()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
  })
  
  const addContact = (data)=>{
    setContact([ ...contact ,{id : uuid4() ,data}])
  }
  const deleteContact =(id)=>{
    const updatedList = contact.filter((val)=>{
      return val.id !== id;
    })
    setContact (updatedList)

  }
  return (
    <>
    <div className="App">
      <Header />
    </div>
    
      <AddContacts addContact={addContact}/>
      <ContactList  contact={contact} deleteContact={deleteContact}/>
    </>
  );
}

export default App;