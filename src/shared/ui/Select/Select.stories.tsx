import React from 'react';
import { Args, Story } from '@storybook/react';

import Select from './Select';
import { PRODUCTS } from 'constants/constants';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    media: {
      type: 'string',
      description: 'Разрешение экрана',
      defaultValue: 'desktop',
      optoins: [
        "Поке",
        "Супы и карри",
        "Вок",
        "Сэндвичи",
        "Десерты",
        "Напитки",
        "Роллы",
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
  optoins: PRODUCTS,
};
