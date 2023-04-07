import React from 'react';
import { Args, Story } from '@storybook/react';

import './Button.module.scss';
import { Button } from "./Button";

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
