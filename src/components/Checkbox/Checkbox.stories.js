import React from 'react';
import Checkbox from "./index";
import { storiesOf } from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom";

storiesOf("Checkbox", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <Checkbox />
            </Switch>
        </BrowserRouter>));


