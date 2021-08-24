import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';

const initialState = {
    name: "",
    phone: "",
    email: "",

}

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [state, setstate] = useState(initialState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setstate({
            ...state,
            [name]: value
        });

    }

    const createContact = (e) => {

        e.preventDefault();
        const new_contact = {
            id: shortid.generate(),
            name: state.name,
            email: state.email,
            phone: state.phone
        }
        console.log(new_contact)
        dispatch(addContact(new_contact))
        history.push("/")

    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header bg-primary text-white">Add a Contacts</div>
            <div className="card-body">
                <form onSubmit={createContact}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter your name"
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter your phone"
                            name="phone"
                            value={state.phone}
                            onChange={handleChange}
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="enter your E-mail"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                        />

                    </div>

                    <button type="submit" className="btn btn-primary">Create Conatct</button>
                </form>
            </div>

        </div>
    )
}

export default AddContact;
