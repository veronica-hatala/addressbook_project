import { FaTimes } from 'react-icons/fa'

const Contact = ({contact, deleteContact}) => {
    return (
        <div>
            <img src={contact.picture} />
            <h3>
                {contact.firstName} {contact.lastName}
            </h3>
            <FaTimes
                onClick={() => deleteContact(contact.id)}
            />
            <p>{contact.address}</p>
            <p>{contact.phone}</p>
        </div>
    )
}

export default Contact