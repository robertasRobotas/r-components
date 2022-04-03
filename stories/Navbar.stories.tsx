import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Navbar } from '../src';

const meta: Meta = {
  title: 'Navbar',
  component: Navbar,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const oneDimentionalMenuLinks = [
  { title: 'GALERIJA', link: '/galerija' },
  { title: 'PASIŪLYMAI', link: '/pasiūlymai' },
  { title: 'KALENDORIUS', link: '/kalendorius' },
  { title: 'KONTAKTAI', link: '/kontaktai' },
];

export const PhotoSliderComponent: Story = (args) => {
  return (
    <Navbar
      type="logo-middle-navbar"
      oneDimentionalMenuLinks={oneDimentionalMenuLinks}
      maxWidth={'1130px'}
      mobileVersionMaxWidth="767px"
      backgroundColor="white"
    />
  );
};
