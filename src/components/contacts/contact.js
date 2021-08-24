import React from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../actions/contactAction'

const Contact = ({ contact }) => {
    let ds = useDispatch();
    const { name, phone, email, id } = contact;


    return (
        <tr>
            <td>
                <div className="custom-control  custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>

            <td>{id}</td>
            <td>
                <Avatar name={name} size="45" round={true} className="mr-2" /> {name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contacts/edit/${id}`}>
                    <span className="material-icons mr-2 text-danger">edit</span>
                </Link>
                <Link to="#">
                    <span className="material-icons mr-2 text-danger" onClick={() => ds(deleteContact(id))}> remove_circle</span>
                </Link>
            </td>
        </tr>

    )
}

export default Contact;
