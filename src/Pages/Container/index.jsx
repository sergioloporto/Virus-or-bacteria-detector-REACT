import React from 'react';
import "./container.scss"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

const Container = () => {
    return (
        <div className="container">
            <Header />
            <Main />
            <Footer />
        </div>
    )

};


export default Container;