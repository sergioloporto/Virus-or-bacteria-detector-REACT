import React from 'react';
import "./button.scss"

const MainBtn = props => {
    const {mainBtnText} = props;
    return (
            <button className="main-btn">
                {mainBtnText}
            </button>
    )
};


export default MainBtn;