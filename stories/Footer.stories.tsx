import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Footer } from '../src';
import logo from './assets/davidavi-logo-black.png';

const meta: Meta = {
  title: 'Navbar',
  component: Footer,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const socialMedia = [
  { type: 'facebook', link: 'https://www.facebook.com/home.php' },
  { type: 'instagram', link: 'https://www.instagram.com/' },
  { type: 'gmail', link: 'https://mail.google.com/mail/u/0/#inbox' },
];

export const PhotoSliderComponent: Story = (args) => {
  return (
    <Footer
      type="logo-contacts-footer"
      socialMedia={socialMedia}
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
