import React, { useState }from 'react'

const Login = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        // DO FETCH HERE???
        //USE RETURNED DATA TO RENDER SOMETHING TO PAGE
        console.log('This is submit USERNAME', username)
        console.log('This is handle PASSWORD', password)
    }
    
    // const handleChange = (event) => {
    //     setUserName(event.target.value)
    //     setPassword(event.target.value)
    //     console.log('This is handle CHANGE', userName)
    //     console.log('This is handle CHANGE', password)
    // }


    return (
        <div>
            <h1 className="text-center">Login</h1>
            
                <form className="text-center border border-light" onSubmit={handleSubmit}>
                    
                    <br /> 

                    <div>
                    <label className="form-label">
                        Username:
                        <input type="text" className="form-control" name="username" onChange={e => setUserName(e.target.value)} ></input>
                    </label>  
                    </div>

                    <br /> 
                    
                    <div>
                    <label className="form-label">
                        Password:
                        <input type="text" className="form-control" name="password" onChange={e => setPassword(e.target.value)}></input>
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
