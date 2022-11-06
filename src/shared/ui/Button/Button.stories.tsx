import React from 'react';
import { Args, Story } from '@storybook/react';

import Button from './Button';
import './Button.module.scss';

export default {
  title: 'Button',
  component: Button,
};

const Template: Story = (arg: Partial<Args>) => (
  <Button
    type="button"
    onClick={() => {
      console.log('Button.stories');
    }}
    {...arg}
  />
);

export const Default = Template.bind({});

Default.args = {
  children: '',
};
