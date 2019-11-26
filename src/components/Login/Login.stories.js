import React from 'react';
import Login from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Login", module)
    .add("default", () => <Login />);

