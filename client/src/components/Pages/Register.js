import React from 'react'

const Register = () => {
    return (
        <div>
            <h1 className="text-center">Register</h1>
            
                <form className="text-center border border-light">
                
                    <br /> 
                    
                    <div>
                    <label className="form-label">
                        Username:
                        <input type="text" className="form-control" name="username"></input>
                    </label>  
                    </div>

                    <br /> 
                    
                    <div>
                    <label className="form-label">
                        Password:
                        <input type="text" className="form-control" name="password"></input>
                    </label>  
                    </div>

                    <br /> 

                    <div>
                    <label className="form-label">
                        Repeat Password:
                        <input type="text" className="form-control" name="repeatpassword"></input>
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
