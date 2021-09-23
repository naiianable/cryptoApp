import React from 'react'

const Register = () => {
    return (
        <div>
            <h1 className="text-center">Register</h1>
            
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

                    <div className="form-group">
                    <label>
                        Repeat Password:
                        <input type="text" className="form-control" name="repeatpassword"></input>
                    </label>  
                    </div>

                    <div>
                        <button>Submit</button>
                    </div>

                </form>
            
        </div>
    )
}

export default Register
