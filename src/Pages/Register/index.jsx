import React, {Component} from 'react';
import "./register.scss"
import BackArrow from "../../components/BackArrow";
import Container from "../../components/Container";
import LoginCheck from "../../Middleware/login";

class Register extends Component {
    state = {
        email: "",
        // password: "",
        // passwordRepeat: "",
        // isFormClicked: false,
        isEmailValid: true
        // isPasswordValid: true,
        // isPasswordRepeatValid: true,
        // isLoginError: "",
        // isLoginSuccess: false
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    isFormValid = () => {
        const {email, password, passwordRepeat} = this.state;
        // const isEmailValid = email.includes("@") && email.length > 7;
        const isEmailValid = email.includes("@") && email.length > 7;
        console.log(isEmailValid);
        console.log(email.length);
        // const isPasswordValid = password.length > 3;
        // const isPasswordRepeatValid = passwordRepeat === password;
        this.setState({isEmailValid});
        // this.setState({isEmailValid, isPasswordValid, isPasswordRepeatValid});
        // return isEmailValid && isPasswordValid && isPasswordRepeatValid;
        return isEmailValid;
    };


    onClickSubmit = e => {
        e.preventDefault();
        const {email, password, passwordRepeat} = this.state;
        const isFormValid = this.isFormValid();
        if (isFormValid === true) {
            this.setState({ isFormClicked: true });
            console.log("the form is valid")
        } else {
            console.log("the form is NOTTTTT valid")
        }
    };

    render() {
        const { email, password, passwordRepeat, isPasswordValid, isEmailValid, isLoginError, isLoginSuccess } = this.state;
        return (
            <Container>
                <BackArrow />
                <form className="register-box" onSubmit={this.onClickSubmit}>
                    <label htmlFor="input-email">Enter your email</label>
                    <input type="email"
                           placeholder="Your email..."
                           name="email"
                           value={email}
                           id="input-email"
                           onChange={this.handleInputChange}
                    />
                    <label htmlFor="input-password">Choose a password</label>
                    <input
                        type="password"
                        placeholder="Password..."
                        name="password"
                        value={password}
                        id="input-password"
                        onChange={this.handleInputChange}
                    />
                    <label htmlFor="input-password-repeat">Repeat the password</label>
                    <input
                        type="password"
                        placeholder="Repeat the password..."
                        name="passwordRepeat"
                        value={passwordRepeat}
                        id="input-password-repeat"
                        onChange={this.handleInputChange} />
                    <button className="submit-btn" type="submit" >Submit</button>
                </form>
            </Container>
        )

    }


}


export default Register;