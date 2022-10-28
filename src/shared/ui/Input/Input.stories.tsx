import React from "react";

import Input from "./Input";
import "../../../index.scss";

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Вариант внешнего вида поля ввода',
            defaultValue: 'normal',
            options: [
                'normal',
                'value',
                'error',
                'error_message',
            ],
            control: {
                type: 'radio'
            },
        },
        media: {
            type: 'string',
            description: 'Разрешение экрана',
            defaultValue: 'desktop',
            options: [
                'desktop',
                'mobile',

            ],
            control: {
                type: 'radio'
            },
        },
    }
};

const Template = (arg: any) => <Input {...arg} />

export const Desktop = Template.bind({});

Desktop.args = {
    placeholder: 'Введите имя',
    label: 'Имя',
    variant: 'normal',
}

export const Mobile = Template.bind({});

Mobile.args = {
    placeholder: 'Введите имя',
    label: 'Имя',
    variant: 'normal',
}