import React from 'react';
import './SignUp.css'

const SignUp = () => {
    return (
        <div>
            <div className="form-container">
                <h2 className='form-title'>Please Sign Up</h2>
                <form action="">
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" name='confirm' required />
                    </div>
                    <input className='btn-submit' type="submit" value="Sign Up"  /> 
                </form>
            </div>
        </div>
    );
};

export default SignUp;