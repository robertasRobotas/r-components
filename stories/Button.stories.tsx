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
      onClick={() => console.log('c')}
    />
  );
};

export const UnderlinedButtonComponent: Story = (args) => {
  return (
    <Button
      type="underlined-botton"
      mainColor="#707070"
      invertedColor="white"
      fontSize="16px"
      content="GALERIJA"
      width="125px"
      height="45px"
      onClick={() => console.log('c')}
    />
  );
};
