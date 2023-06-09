import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="form-container">
                <h2 className='form-title'>Please Log In</h2>
                <form action="">
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Login"  /> 
                </form>
            </div>
        </div>
    );
};

export default Login;