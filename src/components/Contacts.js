import Contact from "./Contact"

const Contacts = ({contacts, deleteContact}) => {
    return (
        <div className="contactList">
            {contacts.map((contact) => (
                <Contact 
                    key={contact.id}
                    contact={contact}
                    deleteContact={deleteContact}
                />
            ))
            }
        </div>
    )
}

export default Contacts