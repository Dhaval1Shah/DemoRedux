import React, { useState, useEffect } from 'react'
import Contact from './Contact';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { selectAllContact, clearContacts, deleteAllContacts } from '../../actions/contactAction';


const Contacts = () => {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector(state => state.contact.contacts)
    const selectedContacts = useSelector(state => state.contact.selectedContacts)

    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map(contact => console.log(contact))))
        } else {
            dispatch(clearContacts())
        }
    }, [selectAll])

    return (
        <div>
            {
                selectedContacts.length > 0 ? (<button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAllContacts())}>Delete All</button>) : null
            }
            <table className="table shadow">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>
                            <div className="custom-control  custom-checkbox">
                                <input
                                    id="select"
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={selectAll}
                                    onClick={() => setSelectAll(!selectAll)}

                                />
                                <label
                                    htmlFor="selectAll"
                                    className="custom-control-label"
                                ></label>
                            </div>
                        </th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Contact contact={contact} key={contact.id} selectAll={selectAll} />
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default Contacts;