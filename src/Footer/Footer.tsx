import React from 'react';
import { LogoWithContactsFooter } from './LogoWithContactsFooter';

type SocialMediaProps = {
  type: string;
  link: string;
};

type FooterProps = {
  type: 'logo-contacts-footer';
  maxWidth: string;
  mobileVersionMaxWidth: string;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
  logoSrc?: string;
  logoWidthPx?: number;
  minWebsiteWidth?: string;

  email?: string;
  phoneNumber?: string;
  copyRight?: string;
  socialMedia?: Array<SocialMediaProps>;
};

export const Footer = ({
  type,
  maxWidth,
  mobileVersionMaxWidth,
  backgroundColor,
  fontColor,
  logoSrc,
  logoWidthPx,
  minWebsiteWidth,
  fontSize,
  email,
  phoneNumber,
  copyRight,
  socialMedia,
}: FooterProps) => {
  if (
    type === 'logo-contacts-footer' &&
    email &&
    phoneNumber &&
    copyRight &&
    socialMedia
  ) {
    return (
      <LogoWithContactsFooter
        maxWidth={maxWidth}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        fontSize={fontSize}
        logoSrc={logoSrc}
        logoWidthPx={logoWidthPx}
        minWebsiteWidth={minWebsiteWidth}
        socialMedia={socialMedia}
        email={email}
        phoneNumber={phoneNumber}
        copyRight={copyRight}
      />
    );
  }
  return null;
};
