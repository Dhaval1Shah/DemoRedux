import React, { useState } from 'react'
import Contact from './contact';
import { useSelector } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

export const Contacts = () => {
    const [select, setSelect] = useState(false);
    const contacts = useSelector(state => state.contact.contacts)


    return (
        <div>
            <table className="table shadow">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>
                            <div className="custom-control  custom-checkbox">
                                <input
                                    id="select"
                                    type="checkbox"
                                    className="custom-control-input"
                                    value={select}
                                    onClick={() => setSelect(!select)}
                                />
                                <label
                                    htmlFor="select"
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
                    {
                        contacts.map((contact) => <Contact contact={contact} key={Math.random()} />)
                    }


                </tbody>
            </table>
        </div>
    )
}
