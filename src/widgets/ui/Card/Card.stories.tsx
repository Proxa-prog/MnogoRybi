import React from 'react';
import { Args, Story } from '@storybook/react';

import Card from './Card';
import 'app/App.module.scss';
import './Card.module.scss';

export default {
  title: 'Card',
  component: Card,
};

const Template: Story = (arg: Partial<Args>) => (
  <Card {...arg} />
);

export const Default = Template.bind({});

Default.args = {
  imageUrl: 'https://via.placeholder.com/150',
  header: 'Фирменный поке с индейкой',
  description: 'Состав на усмотрение шеповара',
  cost: 360,
  previousCost: 360,
  buttonText: 'Подробнее',
  buttonColor: 'yellow',
};
