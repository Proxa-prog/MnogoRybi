import React from "react";

import Checkbox from "./Checkbox";
import "./Checkbox.module.scss";

export default {
    title: 'Checkbox',
    component: Checkbox,     
};

const Template = (arg: any) => <Checkbox {...arg} />;

export const Square = Template.bind({});

Square.args = {
    variant: 'checked',
}
