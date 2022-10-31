import React from "react";

import Checkbox from "./Checkbox";
import "./Checkbox.module.scss";

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        variant: {
            type: 'string',
            description: 'Состояние',
            defaultValue: 'not_active',
            options: [
                'not_active',
                'active',
                'not_active_disabled',
                'active_disabled',
            ],
            control: {
                type: 'radio'
            },
        },
        type: {
            type: 'string',
            description: 'Состояние',
            defaultValue: 'not_active',
            options: [
                'square',
                'circle',
            ],
            control: {
                type: 'radio'
            },
        },

    }
};

const Template = (arg: any) => <Checkbox {...arg} />;

export const Square = Template.bind({});

Square.args = {
    variant: 'not_active',
}

export const Circle = Template.bind({});

Circle.args = {
    variant: 'not_active',
    type: 'square',
}