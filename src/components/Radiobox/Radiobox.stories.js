import React from 'react';
import Radiobox from "./index";
import { storiesOf } from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom";

storiesOf("Radiobox", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <Radiobox />
            </Switch>
        </BrowserRouter>));


