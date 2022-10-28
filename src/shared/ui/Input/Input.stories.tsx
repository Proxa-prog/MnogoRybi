import React from "react";

import Input from "./Input";
import "./Input.module.scss";

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

Desktop.decorators = [
    (Story: any) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ];

export const Mobile = Template.bind({});

Mobile.args = {
    placeholder: 'Введите имя',
    label: 'Имя',
    variant: 'normal',
}

Mobile.decorators = [
    (Story: any) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ];