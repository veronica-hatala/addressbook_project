import { useState, useEffect } from 'react'
import Title from "./components/Title"
import Contacts from "./components/Contacts"
import AddContact from "./components/AddContact"

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      const fetchedContacts = await fetchContacts()
      setContacts(fetchedContacts)
    }
    getContacts()
  }, [])

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:5000/contacts")
    const data = await res.json()
    return data
  }

  const fetchContact = async (id) => {
    const res = await fetch("http://localhost:5000/contacts")
    const data = await res.json()
    return data
  }

  const addContact = async (contact) => {
    const res = await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-type":"application/json",
      },
      body: JSON.stringify(contact)
    })
    const data = await res.json()
    setContacts([...contacts, data])
  }

  const deleteContact = async (id) => {
    const res = await fetch(`http://localhost:5000/contacts/${id}`, {
      method: "DELETE",
    })
    res.status === 200
      ? setContacts(contacts.filter((contact) => contact.id !== id))
      : alert('Contact Not Found')
  }

  return (
    <div className="App">
      <Title
        text={"Address Book"} 
      />

      <AddContact 
        addContact={addContact}
      />

      <Contacts
        contacts={contacts}
        deleteContact={deleteContact}
      />

    </div>
  );
}

export default App;
