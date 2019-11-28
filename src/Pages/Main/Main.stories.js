import React from 'react';
import Main from "./index";
import { storiesOf } from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom";


storiesOf("Main", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <Main />
            </Switch>
        </BrowserRouter>));


