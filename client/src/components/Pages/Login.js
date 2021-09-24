import React, { useState }from 'react'

const Login = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        // DO FETCH HERE???
        //USE RETURNED DATA TO RENDER SOMETHING TO PAGE
        console.log('This is submit USERNAME:', username)
        console.log('This is handle PASSWORD:', password)
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
