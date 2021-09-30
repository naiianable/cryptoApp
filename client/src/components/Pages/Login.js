import React, { useState }from 'react'
import { useCookies } from 'react-cookie';


const Login = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [cookies, setCookie] = useCookies(['token', 'loggedIn', 'errors']);

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
            setCookie('token', data.token);
            setCookie('loggedIn', true);
            // setCookie('errors', data.errors);
            console.log('THIS IS DATA', data)
        })
        .catch((err) => console.log(err));

        console.log('THIS IS COOKIES', cookies);
        
        // if(cookies.loggedIn) {
        //     console.log('we logged in')
        // } else {
        //     console.log('nope, not logged in')
        // }

        // console.log('This is submit USERNAME:', username)
        // console.log('This is handle PASSWORD:', password)
    }



    
    const handleChange = (e) => {
        if(e.target.name === 'username') {
            setUserName(e.target.value);
        } else if(e.target.name === 'password'){
            setPassword(e.target.value);  
        };
    }
    // console.log('This is handle USERNAME', username)
    // console.log('This is handle PASSWORD', password)

    return (
        <div>
            <h1 className="text-center">Login</h1>
            
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
