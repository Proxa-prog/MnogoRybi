import React from 'react';
import { Args, Story } from '@storybook/react';

import Header from './Header';
import './Header.module.scss';

export default {
  title: 'Header',
  component: Header,
};

const Template: Story = (arg: Partial<Args>) => (
  <Header {...arg} />
);

export const Default = Template.bind({});

Default.args = {

};
