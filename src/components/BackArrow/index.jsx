import React from 'react';
import "./backarrow.scss"
import {Link} from "react-router-dom";

const BackArrow = () => {
    return (

        <Link to="/">
            <button className="backarrow">
                <i className="icon-undo" />
            </button>
        </Link>

    )
};


export default BackArrow;