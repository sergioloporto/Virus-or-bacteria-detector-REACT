import React from 'react';
import BackArrow from "./index";
import {storiesOf} from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom"

storiesOf("BackArrow", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <BackArrow />
            </Switch>
        </BrowserRouter>));


