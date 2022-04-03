import React from 'react';
import { LogoMiddleNavbar } from './LogoMiddleNavbar';

type OneDimentionalMenuLinks = {
  title: string;
  link: string;
};

type NavbarProps = {
  type: 'logo-middle-navbar';
  oneDimentionalMenuLinks?: Array<OneDimentionalMenuLinks>;
  maxWidth: string;
  mobileVersionMaxWidth: string;
  backgroundColor?: string;
  fontColor?: string;
  logoSrc?: string;
  logoWidth?: string;
};

export const Navbar = ({
  type,
  oneDimentionalMenuLinks,
  maxWidth,
  mobileVersionMaxWidth,
  backgroundColor,
  fontColor,
  logoSrc,
  logoWidth,
}: NavbarProps) => {
  if (type === 'logo-middle-navbar' && oneDimentionalMenuLinks) {
    return (
      <LogoMiddleNavbar
        oneDimentionalMenuLinks={oneDimentionalMenuLinks}
        maxWidth={maxWidth}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        logoSrc={logoSrc}
        logoWidth={logoWidth}
      />
    );
  }
  return null;
};
