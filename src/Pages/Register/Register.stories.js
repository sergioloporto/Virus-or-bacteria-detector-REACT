import React from 'react';
import Register from "./index";
import { storiesOf } from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom";


storiesOf("Register", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <Register />
            </Switch>
        </BrowserRouter>));
