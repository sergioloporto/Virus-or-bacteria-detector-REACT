import React from 'react';
import Container from "./index";
import { storiesOf } from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom";

storiesOf("Container", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <Container />
            </Switch>
        </BrowserRouter>));



