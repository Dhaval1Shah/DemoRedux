import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Contact Book
                </Link>
                <div>
                    <Link to="/contacts/add" className="btn btn-light ml-auto bg-white">
                        Create Contact
                    </Link>
                </div>

            </div>
        </nav >
    )
}
