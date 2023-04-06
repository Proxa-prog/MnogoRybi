import React from 'react';
import { Args, Story } from '@storybook/react';

import { Select } from './Select';
import { PRODUCTS } from 'shared';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    media: {
      type: 'string',
      description: 'Разрешение экрана',
      defaultValue: 'desktop',
      options: [
        { name: "Поке" },
        { name: "Супы и карри" },
        { name: "Вок" },
        { name: "Сэндвичи" },
        { name: "Десерты" },
        { name: "Напитки" },
        { name: "Роллы" },
      ],
      control: {
        type: 'radio',
      },
    },
  },
};

const Template: Story = (arg: Partial<Args>) => (
  <Select
    options={PRODUCTS}
    {...arg}
  />
);

export const Default = Template.bind({});

Default.args = {
  options: PRODUCTS,
};
