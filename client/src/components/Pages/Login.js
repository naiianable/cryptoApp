import React, { useState, useEffect }from 'react'
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';


const Login = () => {

    const history = useHistory();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [cookie, setCookie] = useCookies(['token', 'loggedIn']);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let userInfo = JSON.stringify({
            username: username,
            password: password
        });

        fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: userInfo
        })
        .then(res => res.json())
        .then((data) => {
            
            if(data.token) {
                setCookie('token', data.token);
                setCookie('loggedIn', true);
            } else if(data.errorMsg) {
                setErrorMsg(data.errorMsg)
            }
            console.log('THIS IS ERROR MSG', errorMsg)
            
            // setCookie('errors', data.errors);
            console.log('THIS IS DATA', data)
        })
        .catch((err) => console.log(err));

        console.log('THIS IS COOKIES', cookie);


    }



    
    const handleChange = (e) => {
        if(e.target.name === 'username') {
            setUserName(e.target.value);
        } else if(e.target.name === 'password'){
            setPassword(e.target.value);  
        };
    }

        if(!cookie.loggedIn) {
            history.push('/login')
            
        } else {
            history.push('/coins');
        }


    return (
        <div>
            <h1 className="text-center">Login</h1>

            
            
                {errorMsg && 
                <div className="alert alert-primary" role="alert"> {errorMsg} </div>}
            
            
            
                <form className="text-center border border-light" onSubmit={handleSubmit}>
                    
                    <br /> 

                    <div>
                    <label className="form-label">
                        Username:
                        <input type="text" className="form-control" name="username" onChange={handleChange} ></input>
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
                        <button className="btn btn-secondary" type="submit">Submit</button>
                    </div>

                </form>
            
        </div>
    )
}

export default Login
