import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, SocialIcons } from '../src';
import logo from './assets/davidavi-logo-black.png';

const socialMedia = [
  { type: 'facebook', link: 'https://www.facebook.com/home.php' },
  { type: 'instagram', link: 'https://www.instagram.com/' },
  { type: 'gmail', link: 'https://mail.google.com/mail/u/0/#inbox' },
];

const meta: Meta = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const SimpleIconComponent: Story = (args) => {
  return <Icon width="100px" height="20px" imgSrc={logo} />;
};

export const SocialIconComponents: Story = (args) => {
  return <SocialIcons width="20px" height="20px" socialMedia={socialMedia} />;
};
