import React from 'react';
import './App.scss';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import DiagnoseTool from "./Pages/Diagnose-tool";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {


    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/diagnose-tool" exact component={DiagnoseTool} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
