import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        
            <div>
                <nav className="navbar navbar-light bg-light">
                    <p>This is our crypto app</p>
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <Link className="navbar-brand" to="/login">Login</Link>
                    <Link className="navbar-brand" to="/register">Register</Link>
                </nav>
            </div>
        
        
    )
}

export default NavBar
