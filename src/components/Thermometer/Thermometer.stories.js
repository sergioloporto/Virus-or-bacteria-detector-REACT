import React from 'react';

import Thermometer from "./index";
import {storiesOf} from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom"

storiesOf("Thermometer", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <Thermometer />
            </Switch>
        </BrowserRouter>));


