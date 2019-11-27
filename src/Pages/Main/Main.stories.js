import React from 'react';
import Main from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Main", module)
    .add("default", () => <Main />);

