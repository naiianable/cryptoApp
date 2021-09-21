import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <text>This is our crypto app</text>
            <a className="navbar-brand" href="/" >Home</a>
            <a className="navbar-brand" href="/about" >About</a>
            <a className="navbar-brand" href="/login" >Login</a>
            <a className="navbar-brand" href="/register" >Register</a>
        </nav>
    )
}

export default NavBar
