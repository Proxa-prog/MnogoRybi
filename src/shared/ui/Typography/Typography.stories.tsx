import React from 'react';
import { Args, Story } from '@storybook/react';

import Typography, { TypographyProps } from './Typography';

import './Typography.module.scss';

export default {
  title: 'Typography',
  component: Typography,
};

const Template: Story<TypographyProps> = (arg: Partial<Args>) => (
  <Typography type="H1" {...arg} />
);

export const Desktop = Template.bind({});

Desktop.args = {
  children: 'Таким будет ваш текст!',
};
