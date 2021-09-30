import React from 'react';
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';


const NavBar = () => {

    const [cookie, setCookie, removeCookie] = useCookies(['token', 'loggedIn']);

    const logout = () => {
        removeCookie('token');
        removeCookie('loggedIn');
    }

    return (
        
            <div>
                <nav className="navbar navbar-light bg-light">
                    <p>This is our crypto app</p>
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <Link className="navbar-brand" to="/coins">Coins</Link>
                    <Link className="navbar-brand" to="/list">List</Link>
                    <Link className="navbar-brand" to="/login">Login</Link>
                    <Link className="navbar-brand" to="/register">Register</Link>
                    <Link onClick={logout} className="navbar-brand" to="/">Logout</Link>
                </nav>
            </div>
        
        
    )
}

export default NavBar
