import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon } from '../src';
import logo from './assets/davidavi-logo-black.png';

const meta: Meta = {
  title: 'Navbar',
  component: Icon,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const PhotoSliderComponent: Story = (args) => {
  return <Icon width="20px" height="20px" imgSrc={logo} />;
};
