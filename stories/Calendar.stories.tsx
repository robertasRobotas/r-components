import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Calendar } from '../src';

const meta: Meta = {
  title: 'Calendar',
  component: Calendar,
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

export const CallendarComponent: Story = (args) => {
  return (
    <Calendar type="availability-of-specific-month" busyDays={[new Date()]} />
  );
};
