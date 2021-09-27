
import React, { useState, useEffect } from 'react';

const Register = () => {
    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [repeatPassword, setRepeatPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                username: username,
                password: password
            })
        })
        .then(res => res.json())
        .then((data) => {
            console.log('THIS IS DATA', data);
        })
        
        // console.log('This is EMAIL:', email)
        // console.log('This is USERNAME:', username)
        // console.log('This is PASSWORD:', password)
        // console.log('This is repeatPASSWORD:', repeatPassword)
    }
    
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if(e.target.name === 'username') {
            setUserName(e.target.value);
        } else if(e.target.name === 'password') {
            setPassword(e.target.value);  
        } else if(e.target.name === 'repeatPassword') {
            setRepeatPassword(e.target.value);
        };
    }


    return (
        <div>
            <h1 className="text-center">Register</h1>
            
                <form className="text-center border border-light" onSubmit={handleSubmit}>
                
                     <br /> 
                    
                    <div>
                    <label className="form-label">
                        Email:
                        <input type="text" className="form-control" name="email" onChange={handleChange}></input>
                    </label>  
                    </div>

                    <br /> 
                    
                    <div>
                    <label className="form-label">
                        Username:
                        <input type="text" className="form-control" name="username" onChange={handleChange}></input>
                    </label>  
                    </div>

                    <br /> 
                    
                    <div>
                    <label className="form-label">
                        Password:
                        <input type="text" className="form-control" name="password" onChange={handleChange}></input>
                    </label>  
                    </div>

                    <br /> 

                    <div>
                    <label className="form-label">
                        Repeat Password:
                        <input type="text" className="form-control" name="repeatPassword" onChange={handleChange}></input>
                    </label>  
                    </div>

                    <br /> 

                    <div>
                        <button className="btn btn-secondary" type="submit">Submit</button>
                    </div>

                </form>
            
        </div>
    )
}

export default Register
