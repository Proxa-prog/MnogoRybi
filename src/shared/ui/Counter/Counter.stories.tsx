import React from 'react';
import { Args, Story } from '@storybook/react';

import { Counter } from './Counter';

import './Counter.module.scss';

export default {
  title: 'Counter',
  component: Counter,
};

const Template: Story = (arg: Partial<Args>) => (
  <Counter {...arg} />
);

export const Default = Template.bind({});
