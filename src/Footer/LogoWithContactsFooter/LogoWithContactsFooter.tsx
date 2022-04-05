import React from 'react';
import styled from 'styled-components';

import { SocialIcons } from '../../Icon/SocialIcons';

const Wrapper = styled.div<any>``;
const Contacts = styled.div<any>``;
const Logo = styled.img<any>``;
const SocialMedia = styled.div<any>``;

type SocialMediaProps = {
  type: string;
  link: string;
};

type FooterProps = {
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

export const LogoWithContactsFooter = ({
  maxWidth,
  mobileVersionMaxWidth,
  backgroundColor,
  logoSrc,
  logoWidthPx,
  minWebsiteWidth,
  email,
  phoneNumber,
  copyRight,
  socialMedia,
}: FooterProps) => {
  return (
    <Wrapper>
      <Contacts>
        <>{email}</>
        <>{phoneNumber}</>
      </Contacts>
      <Logo src={logoSrc} />
      <SocialMedia>
        {socialMedia && <SocialIcons socialMedia={socialMedia} />}
        <>{copyRight}</>
      </SocialMedia>
    </Wrapper>
  );
};
