import React from 'react';
import DiagnoseTool from "./index";
import { storiesOf } from "@storybook/react";
import {BrowserRouter, Switch} from "react-router-dom";


storiesOf("Diagnosetool", module)
    .add("default", () => (
        <BrowserRouter>
            <Switch>
                <DiagnoseTool />
            </Switch>
        </BrowserRouter>));


