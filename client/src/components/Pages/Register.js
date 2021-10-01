import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const history = useHistory();

    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [repeatPassword, setRepeatPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let userInfo = JSON.stringify({
            email: email,
            username: username,
            password: password,
            repeatPassword: repeatPassword
        });

        await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: userInfo
        })
        .then(res => res.json())
        .then((data) => {

            if(data.errorMsg) {
                setErrorMsg(data.errorMsg)
            } else {
                history.push('/login')
            }
            
            console.log('THIS IS DATA', data)
        

        })
        .catch((err) => console.log(err));
            


    }
        // useEffect(() => {
        //     if(errorMsg) {
        //         console.log('THIS IS ERROR MSG', errorMsg)
        //     }
            
        // }, [errorMsg])
        
    
    
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

                {errorMsg && 
                    <div className="alert alert-primary" role="alert"> {errorMsg} </div>}
            
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
