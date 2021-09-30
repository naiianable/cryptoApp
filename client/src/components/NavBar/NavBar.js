import React from 'react';
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';


const NavBar = () => {

    const [cookie, setCookie, removeCookie] = useCookies(['token', 'loggedIn']);

    const logout = () => {
        removeCookie('token');
        removeCookie('loggedIn');
    }

    let navBar;

    if(!cookie.loggedIn) {
        navBar = 
            <div>
                <nav className="navbar navbar-light bg-light">
                    <img src={require('../../images/sifterImg.jpg').default} height={50} width={50} />
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <Link className="navbar-brand" to="/coins">Coins</Link>
                    <Link className="navbar-brand" to="/register">Register</Link>
                    <Link className="navbar-brand" to="/login">Login</Link>
                </nav>
            </div>
    } else {
        navBar = 
            <div>
                <nav className="navbar navbar-light bg-light">
                    <p>Sifter</p>
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <Link className="navbar-brand" to="/coins">Coins</Link>
                    <Link className="navbar-brand" to="/list">List</Link>
                    <Link onClick={logout} className="navbar-brand" to="/">Logout</Link>
                </nav>
            </div>
    }

    return (
        
        navBar
        
    )
}

export default NavBar
