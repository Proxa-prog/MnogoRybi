import React from 'react';
import { Args, Story } from '@storybook/react';

import { LabelText } from './LabelText';

export default {
  title: 'LabelText',
  component: LabelText,
};

const Template: Story = (arg: Partial<Args>) => (
  <LabelText {...arg}>Принимаем заказы</LabelText>
);

export const Default = Template.bind({});
