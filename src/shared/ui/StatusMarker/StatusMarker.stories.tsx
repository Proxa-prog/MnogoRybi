import React from 'react';
import { Args, Story } from '@storybook/react';

import StatusMarker from './StatusMarker';
import './StatusMarker.module.scss';

export default {
  title: 'StatusMarker',
  component: StatusMarker,
};

const Template: Story = (arg: Partial<Args>) => (
  <StatusMarker {...arg}>
    label
  </StatusMarker>
);

export const Default = Template.bind({});

Default.args = {
  children: 'label',
};
