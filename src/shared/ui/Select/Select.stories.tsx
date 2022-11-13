import React from 'react';
import { Args, Story } from '@storybook/react';

import Select from './Select';
import { PRODUCTS } from '/src/constants/constants';

export default {
  title: 'Select',
  component: Select,
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
