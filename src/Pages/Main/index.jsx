import React from 'react';
import Container from "../../components/Container";
import MainBtn from "../../components/Buttons";
import {Link} from "react-router-dom"


const Main = () => {

    const styles =  {
        justifyContent: "center"
    };


    return (
        <Container style={styles}>
            <img src="images/virus.svg" className="logo" alt="logo" />
            <div className="login-register-buttons">
                        <Link to="/login"><MainBtn mainBtnText="Log in" /></Link>
                        <Link to="/register"><MainBtn mainBtnText="Register" /></Link>
            </div>
            <MainBtn mainBtnText="Continue without registration" />
        </Container>
    )
};


export default Main;