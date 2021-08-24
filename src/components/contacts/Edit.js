import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getConatct, updtaeContact } from '../../actions/contactAction';
import shortid from 'shortid';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

const initialState = {
    name: "",
    phone: "",
    email: "",

}

const EditContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector(state => state.contact.contact);
    let { id } = useParams()


    const [state, setstate] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setstate({
            ...state,
            [name]: value
        });

    }



    useEffect(() => {
        if (contact !== null) {
            // console.log(contact)
            setstate(contact)
        }
        dispatch(getConatct(id))
    }, [contact])

    const onupdtaeContact = (e) => {
        e.preventDefault();
        const UPDATE_CONTACT = Object.assign(contact, {
            name: state.name,
            phone: state.phone,
            email: state.email,
        })
        dispatch(updtaeContact(UPDATE_CONTACT));
        history.push("/")
    }

    return (
        <div className="card border-0 shadow">
            <div className="card-header bg-primary text-white">Edit a Contacts</div>
            <div className="card-body">
                <form onSubmit={(e) => onupdtaeContact(e)}>
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

                    <button type="submit" className="btn btn-warning">Edit Conatct</button>
                </form>
            </div>

        </div>
    )
}

export default EditContact;
