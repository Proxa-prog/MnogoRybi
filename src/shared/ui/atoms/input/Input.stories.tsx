import React from "react";

import Input from "./input";
import "../../../../index.scss";

export default {
    title: 'Input',
    component: Input,
}

const Template = (arg: any) => <Input {...arg} />

export const Default = Template.bind({});

Default.args = {
    placeholder: 'Введите имя',
    children: 'Имя',
}