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
    <Calendar
      type="availability-of-specific-month"
      displayYearMonth="2022-05"
      bookedDays={['2022-05-03', '2022-05-08', '2022-05-14']}
      monthDayNames={['P', 'A', 'T', 'K', 'P', 'Š', 'S']}
      isDisplaymonth={false}
      isDisplayYear={false}
      monthLinesNumber={6}
    />
  );
};
