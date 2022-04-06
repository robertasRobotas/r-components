import React from 'react';
import styled from 'styled-components';

import { SocialIcons } from '../../Icon/SocialIcons';

const Wrapper = styled.div<any>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
`;

const ContentWrapper = styled.div<any>`
  margin: auto;
  display: flex;
  justify-content: space-between;
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => `calc(${props.minWidth} - 30px)`};

  padding-left: 30px;
  padding-right: 30px;
  padding-top: 40px;
  padding-bottom: 40px;
  letter-spacing: ${(props) => props.letterSpacing};
  color: ${(props) => props.color};

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    display: grid;
    justify-content: center;
    text-align: center;
    gap: 30px;
  }
`;
const Contacts = styled.div<any>`
  display: grid;
  gap: 30px;
  order: 1;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    order: 2;
    gap: 20px;
  }
`;

const LogoWrapper = styled.div<any>`
  order: 2;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    order: 1;
  }
`;
const Logo = styled.img<any>`
  width: ${(props) => props.width};
  height: auto;
`;
const SocialMedia = styled.div<any>`
  display: grid;
  gap: 30px;
  order: 3;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    gap: 20px;
  }
`;
const SocialIconsWrapper = styled.div<any>`
  display: flex;
  justify-content: space-between;
  letter-spacing: 0;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    width: 180px;
    margin: auto;
  }
`;

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
  color?: string;
  letterSpacing?: string;
  socialHoverColor?: string;

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
  color,
  letterSpacing,
  socialHoverColor,
}: FooterProps) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <ContentWrapper
        maxWidth={maxWidth}
        letterSpacing={letterSpacing}
        color={color}
        minWidth={minWebsiteWidth}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
      >
        <Contacts mobileVersionMaxWidth={mobileVersionMaxWidth}>
          <div>{email}</div>
          <div>{phoneNumber}</div>
        </Contacts>
        <LogoWrapper mobileVersionMaxWidth={mobileVersionMaxWidth}>
          <Logo width={logoWidthPx} src={logoSrc} />
        </LogoWrapper>
        <SocialMedia mobileVersionMaxWidth={mobileVersionMaxWidth}>
          <SocialIconsWrapper mobileVersionMaxWidth={mobileVersionMaxWidth}>
            {socialMedia && (
              <SocialIcons
                socialMedia={socialMedia}
                color={color}
                hoverColor={socialHoverColor}
              />
            )}
          </SocialIconsWrapper>
          <>{copyRight}</>
        </SocialMedia>
      </ContentWrapper>
    </Wrapper>
  );
};
