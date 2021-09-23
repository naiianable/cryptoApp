import React, { useState } from 'react'

const Login = () => {

    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    let changeHandler = (event) => {
        setInput({ 
            value: event.target,
        })
        
    }


    return (
        <div>
            <h1 className="text-center">Login</h1>
            
                <form className="text-center border border-light p-5" action="" method="POST">
                    <div className="form-group">
                    <label>
                        Username:
                        <input type="text" className="form-control" name="username"></input>
                    </label>  
                    </div>
                    
                    <div className="form-group">
                    <label>
                        Password:
                        <input type="text" className="form-control" name="password"></input>
                    </label>  
                    </div>

                    <div>
                        <button>Submit</button>
                    </div>

                </form>
            
        </div>
    )
}

export default Login
