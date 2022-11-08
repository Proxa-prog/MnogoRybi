import React from 'react';
import { Args, Story } from '@storybook/react';

import List from './List';
import { PRODUCTS } from '../../../constants/constants';

export default {
  title: 'List',
  component: List,
};

const Template: Story = (arg: Partial<Args>) => (
  <List
    items={PRODUCTS}
    {...arg}
  />
);

export const Default = Template.bind({});
