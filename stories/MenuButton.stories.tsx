import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { MenuButton } from '../src';

const meta: Meta = {
  title: 'Menu-Button',
  component: MenuButton,
  argTypes: {
    children: {
      control: {
        isPressed: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Button: Story = (args) => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <MenuButton
      isPressed={isPressed}
      onClick={() => setIsPressed(!isPressed)}
    />
  );
};
