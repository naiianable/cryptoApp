import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {

    const history = useHistory();

    const [email, setEmail] = useState();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [successMsg, setSuccessMsg] = useState();
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
                setErrorMsg(null);
                setSuccessMsg("Registration successful. Login to start sifting!");
                setTimeout(() => {
                    history.push('/login');
                }, 2500);
            }
            
            console.log('THIS IS DATA', data)
        

        })
        .catch((err) => console.log(err));
            


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

                {successMsg && 
                    <div className="d-flex justify-content-center">
                        <div className="alert alert-success" role="alert">{successMsg}</div>
                    </div>      
                }

                {errorMsg && 
                    <div className="d-flex justify-content-center">
                        <div className="alert alert-danger" role="alert">{errorMsg}</div>
                    </div>      
                }
                      
            
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
