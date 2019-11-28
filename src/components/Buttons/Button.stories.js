import React from 'react';
import MainBtn from "./index";
import { storiesOf } from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom";

storiesOf("MainBtn", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <MainBtn />
            </Switch>
        </BrowserRouter>));


