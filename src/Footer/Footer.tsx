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
  color?: string;
  letterSpacing?: string;
  socialHoverColor?: string;

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
  letterSpacing,
  fontSize,
  email,
  phoneNumber,
  copyRight,
  socialMedia,
  color,
  socialHoverColor,
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
        color={color}
        socialHoverColor={socialHoverColor}
        minWebsiteWidth={minWebsiteWidth}
        socialMedia={socialMedia}
        email={email}
        phoneNumber={phoneNumber}
        copyRight={copyRight}
        letterSpacing={letterSpacing}
      />
    );
  }
  return null;
};
