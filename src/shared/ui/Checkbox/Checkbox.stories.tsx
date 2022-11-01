import React from "react";
import { Args, Story } from "@storybook/react";

import Checkbox from "./Checkbox";
import "./Checkbox.module.scss";

export default {
    title: 'Checkbox',
    component: Checkbox,
};

const Template: Story = (arg: Partial<Args>) => (
    <Checkbox
        onChange={() => {console.log("Checkbox.stories");
        }}
        {...arg}
    />
);

export const Default = Template.bind({});

Default.args = {
    variant: 'checked',
}
