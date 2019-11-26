import React from 'react';
import "./login.scss"
import BackArrow from "../BackArrow";

const Login = () => {
    return (
        <>
            <form className="login-box">
                <label htmlFor="input-email">Enter your email</label>
                <input type="email" placeholder="Your email address" name="email" id="input-email" />
                <label htmlFor="input-password">Enter your password</label>
                <input type="password" placeholder="Password" name="password" id="input-password" />
                <small className="forgot-password-link">Forgot password?</small>
                <button className="submit-btn">Log in</button>
            </form>
        </>
    )
};


export default Login;