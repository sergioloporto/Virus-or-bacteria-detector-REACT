import React, {Component} from 'react';
import "./login.scss"
import Container from "../../components/Container";
import BackArrow from "../../components/BackArrow";
import LoginCheck from "../../Middleware/login";
import { Redirect } from "react-router-dom";




class Login extends Component {
    state = {
        email: "",
        password: "",
        isFormClicked: false,
        isEmailValid: true,
        isPasswordValid: true,
        isLoginError: "",
        isLoginSuccess: false
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    isFormValid = () => {
        const { email, password } = this.state;
        const isEmailValid = email.includes("@") && email.length > 3;
        const isPasswordValid = password.length > 3;
        this.setState({ isEmailValid, isPasswordValid });
        return isEmailValid && isPasswordValid
    };

    onClickSubmit = e => {
        const { email, password } = this.state;
        e.preventDefault();
        const isFormValid = this.isFormValid();
        if (isFormValid === true) {
            this.setState({ isFormClicked:true });

            LoginCheck.isValidUser(email, password).then(res => this.setState({isLoginSuccess:true}) ).catch(err => {
                this.setState({isLoginError: "Username or Password are wrong, please try again"})
            });
        }
    };





    render() {
        const { email, password, isPasswordValid, isEmailValid, isLoginError, isLoginSuccess } = this.state;

        if (isLoginSuccess) {
            return <Redirect to="/" />
        }

        return (
            <Container>
                <BackArrow />

                <form onSubmit={this.onClickSubmit} className="login-box">
                    <label htmlFor="input-email">Enter your email</label>
                    <input
                        type="email"
                        placeholder="Your email address..."
                        name="email"
                        id="input-email"
                        value={email}
                        onChange={this.handleInputChange}
                    />

                    <label htmlFor="input-password">Enter your password</label>
                    <input
                        type="password"
                        placeholder="Password..."
                        name="password"
                        id="input-password"
                        value={password}
                        onChange={this.handleInputChange}
                    />

                    <small className="forgot-password-link">Forgot password?</small>
                    <button className="submit-btn" type="submit" >Log in</button>
                </form>

                {/*Print error message is at least email or Password are too short*/}
                {
                    (!isEmailValid || !isPasswordValid) &&
                         <p style={{color:"black"}}>Email and/or password are too short or the email is not of a valid format. Try again.</p>
                }

                {this.state.isFormClicked &&
                <div style={{color:"black"}}>
                    <h1>Logging in...</h1>
                </div>}

                {
                    (isLoginError) && <h2>{isLoginError}</h2>
                }

            </Container>
        )
    }
}


export default Login;