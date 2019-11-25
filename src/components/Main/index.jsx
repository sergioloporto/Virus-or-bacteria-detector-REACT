import React from 'react';
import "./main.scss"
import MainBtn from "../Buttons";

const Main = () => {
        return (
            <main className="main">
                <MainBtn mainBtnText="Log in" />
                <MainBtn mainBtnText="Register" />
                <MainBtn mainBtnText="Continue without registration" />
            </main>
        )

};


export default Main;