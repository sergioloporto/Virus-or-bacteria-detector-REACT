import React from 'react';
import './App.scss';
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import {Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Switch>
        </BrowserRouter>)
}

export default App;
