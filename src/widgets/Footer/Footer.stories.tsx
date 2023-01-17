import React from 'react';
import { Args, Story } from '@storybook/react';

import Footer from './Footer';
import './Footer.module.scss';

export default {
  title: 'Footer',
  component: Footer,
};

const Template: Story = (arg: Partial<Args>) => (
  <Footer {...arg} />
);

export const Default = Template.bind({});

Default.args = {

};
