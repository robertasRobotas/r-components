import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Footer } from '../src';
import logo from './assets/davidavi-logo-black.png';

const meta: Meta = {
  title: 'Footer',
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

export const FooterComponent: Story = (args) => {
  return (
    <Footer
      type="logo-contacts-footer"
      socialMedia={socialMedia}
      maxWidth="1200px"
      mobileVersionMaxWidth="767px"
      backgroundColor="#DFE4ED"
      logoSrc={logo}
      logoWidthPx={200}
      fontSize="16px"
      email="davidavi.morta@gmail.com"
      phoneNumber="+370 607 58455"
      copyRight="© davidavi 2022"
      minWebsiteWidth={'375px'}
      color="#3E3E3E"
      socialHoverColor="#6e6e6e"
      letterSpacing="2px"
    />
  );
};
