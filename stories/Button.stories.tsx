import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const EnterButtonComponent: Story = (args) => {
  return (
    <Button
      type="enter-button"
      mainColor="#BCA183"
      invertedColor="white"
      fontSize="16px"
      content="Žiūrėti"
      width="160px"
      height="45px"
    />
  );
};
