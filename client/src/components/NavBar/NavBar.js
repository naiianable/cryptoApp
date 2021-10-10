import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import cookies from 'js-cookie';
import { useCookies } from 'react-cookie';



const NavBar = () => {

    const [cookie, setCookie,  removeCookie] = useCookies(['token', 'loggedIn']);
    // const [userName, setUserName] = useState();

    // let body = JSON.stringify({
    //     token: cookies.get('token')
    // });

    // useEffect(() => {
    //    fetch('http://localhost:5000/list', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: body
    // })
    // .then(res => res.json())
    // .then(data => {
    //     setUserName(data.username);
    //     console.log(data)
    // }) 
    // })
    

    // console.log('THIS IS THE USERNAME', userName)

    const logout = () => {
        removeCookie('token');
        removeCookie('loggedIn');
    }

    let navBar;


    if(!cookie.loggedIn) {
        navBar = 
            <div>
                <nav className="navbar navbar-light bg-light">
                    <p >Welcome to Sifter</p>
                    {/* <img src={require('../../images/sifterImg.jpg').default} height={50} width={50} alt="" /> */}
                    <Link className="navbar-brand" to="/">Home</Link>
                    <Link className="navbar-brand" to="/about">About</Link>
                    <Link className="navbar-brand" to="/coins">Coins</Link>
                    <Link className="navbar-brand" to="/register">Register</Link>
                    <Link className="navbar-brand" to="/login">Login</Link>
                </nav>
            </div>
    } else {
        navBar = 

            <div >
                
                <nav className="navbar navbar-light bg-light" >
      
                    <p >Welcome to Sifter</p>

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
