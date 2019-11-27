import React from 'react';
import "./container.scss"

const Container = ({children,...rest}) => <div className="container"><main {...rest} className="main">{children}</main></div>;



export default Container;