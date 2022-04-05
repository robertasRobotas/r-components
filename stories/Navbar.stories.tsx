import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Navbar } from '../src';
import logo from './assets/davidavi-logo-black.png';

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
      maxWidth={'1200px'}
      mobileVersionMaxWidth="767px"
      backgroundColor="#f2f2f2"
      logoSrc={logo}
      logoWidthPx={240}
      minWebsiteWidth="400px"
      fontSize="16px"
    />
  );
};
