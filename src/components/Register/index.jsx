import React from 'react';
import "./register.scss"




const Register = () => {
        return (
            <form className="register-box">
                <label htmlFor="input-email">Enter your email</label>
                <input type="email" placeholder="Your email address..." name="email" id="input-email" />
                <label htmlFor="input-password">Choose a password</label>
                <input type="password" placeholder="Password..." name="password" id="input-password" />
                <label htmlFor="input-password-repeat">Repeat the password</label>
                <input type="password" placeholder="Repeat the password..." name="password-repeat" id="input-password-repeat" />
                    <button className="submit-btn">Submit</button>

            </form>
        )
};


export default Register;