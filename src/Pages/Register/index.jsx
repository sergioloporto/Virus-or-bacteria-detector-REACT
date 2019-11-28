import React from 'react';
import "./register.scss"
import BackArrow from "../../components/BackArrow";
import Container from "../../components/Container";

const Register = () => {

    return (
        <Container>
            <BackArrow />
            <form className="register-box">
                <label htmlFor="input-email">Enter your email</label>
                <input type="email" placeholder="Your email..." name="email" id="input-email" />
                <label htmlFor="input-password">Choose a password</label>
                <input type="password" placeholder="Password..." name="password" id="input-password" />
                <label htmlFor="input-password-repeat">Repeat the password</label>
                <input type="password" placeholder="Repeat the password..." name="password-repeat" id="input-password-repeat" />
                <button className="submit-btn">Submit</button>
            </form>
        </Container>
    )
};


export default Register;