import {useState} from "react"

const AddContact = ({ addContact }) => {
    const [picture, setPicture] = useState(null)
    const [firstName, setFName] = useState('')
    const [lastName, setLName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!picture){
            alert("Picture is blank")
            return
        }
        if(!firstName){
            alert("First name is blank")
            return
        }
        if(!lastName){
            alert("Last name is blank")
            return
        }
        if(!address){
            alert("Address is blank")
            return
        }
        if(!phone){
            alert("Phone is blank")
            return
        }

        addContact({ picture, firstName, lastName, address, phone })

        setPicture(null)
        setFName("")
        setLName("")
        setAddress("")
        setPhone("")
        
    }

    return (
        <form onSubmit={onSubmit}>

            <div className="form-control">
            <label>Image</label>
            <input
                type='file'
                name="picture"
                onChange={(e)=>setPicture(e.target.value) }
            />
            </div>

            <div className="form-control">
            <label>First Name</label>
            <input 
                type='text' 
                placeholder="First Name" 
                value={firstName} 
                onChange={(e)=>setFName(e.target.value)}
            />
            </div>

            <div className="form-control">
            <label>Last Name</label>
            <input 
                type='text' 
                placeholder="Last Name" 
                value={lastName}
                onChange={(e)=>setLName(e.target.value)}
            />
            </div>

            <div className="form-control">
            <label>Email</label>
            <input 
                type='email'
                placeholder="Email Address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
            />
            </div>

            <div className="form-control">
            <label>Phone</label>
            <input 
                type='tel'
                placeholder="Phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
            />
            </div>

            <input type="submit" value="Add Contact" />
        </form>
    )
}

export default AddContact