import React from "react";

import Checkbox from "./Checkbox";
import "./Checkbox.module.scss";

export default {
    title: 'Checkbox',
    component: Checkbox,     
};

const Template = (arg: any) => <Checkbox {...arg} />;

export const Default = Template.bind({});

Default.args = {
    variant: 'checked',
}
