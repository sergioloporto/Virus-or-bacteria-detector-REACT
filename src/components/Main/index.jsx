import React from 'react';
import "./main.scss"
import MainBtn from "../Buttons";
import Login from "../Login";
import Register from "../Register";
import BackArrow from "../BackArrow";

const Main = () => {
    return (
        <main className="main">

            {/*<BackArrow />*/}
            <img src="images/virus.svg" className="logo" />


            {/*<Register />*/}


            {/*<Login />*/}



            <div className="login-register-buttons">
                <MainBtn mainBtnText="Log in" />
                <MainBtn mainBtnText="Register" />
            </div>
                 <MainBtn mainBtnText="Continue without registration" />



        </main>
    )

};


export default Main;