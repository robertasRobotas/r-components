import React, { useState } from 'react';
import { MenuButton } from '../../MenuButton/MenuButton';
import {
  Wrapper,
  LinksWrapper,
  Link,
  DesktopLogoWrapper,
  Logo,
  MobileLogoWrapper,
} from './LogoMiddleNavbar.styles';

type OneDimentionalMenuLinks = {
  title: string;
  link: string;
};

type NavbarProps = {
  oneDimentionalMenuLinks: Array<OneDimentionalMenuLinks>;
  maxWidth: string;
  mobileVersionMaxWidth: string;
  backgroundColor?: string;
  fontColor?: string;
  fontSize?: string;
  logoSrc?: string;
  logoWidth?: number;
  minWebsiteWidth?: string;
};

export const LogoMiddleNavbar = ({
  oneDimentionalMenuLinks,
  maxWidth,
  mobileVersionMaxWidth,
  backgroundColor,
  fontColor,
  fontSize,
  logoSrc,
  logoWidth,
  minWebsiteWidth,
}: NavbarProps) => {
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);

  return (
    <Wrapper
      className="wrapper"
      maxWidth={maxWidth}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      mobileVersionMaxWidth={mobileVersionMaxWidth}
      isMobileNavbarOpen={isMobileNavbarOpen}
      minWebsiteWidth={minWebsiteWidth}
    >
      <MobileLogoWrapper
        mobileVersionMaxWidth={mobileVersionMaxWidth}
        className="mobile-logo-wrapper"
        href="/"
      >
        <Logo
          mobileVersionMaxWidth={mobileVersionMaxWidth}
          src={logoSrc}
          logoWidth={logoWidth}
        />
      </MobileLogoWrapper>

      <LinksWrapper
        fontSize={fontSize}
        isMobileNavbarOpen={isMobileNavbarOpen}
        className="links-wrapper"
        mobileVersionMaxWidth={mobileVersionMaxWidth}
      >
        <Link href={oneDimentionalMenuLinks[0].link}>
          {oneDimentionalMenuLinks[0].title}
        </Link>
        <Link href={oneDimentionalMenuLinks[1].link}>
          {oneDimentionalMenuLinks[1].title}
        </Link>

        <DesktopLogoWrapper
          mobileVersionMaxWidth={mobileVersionMaxWidth}
          className="desktop-logo-wrapper"
          href="/"
        >
          <Logo
            mobileVersionMaxWidth={mobileVersionMaxWidth}
            src={logoSrc}
            logoWidth={logoWidth}
          />
        </DesktopLogoWrapper>
        <Link href={oneDimentionalMenuLinks[2].link}>
          {oneDimentionalMenuLinks[2].title}
        </Link>
        <Link href={oneDimentionalMenuLinks[3].link}>
          {oneDimentionalMenuLinks[3].title}
        </Link>
      </LinksWrapper>

      <MenuButton
        isPressed={isMobileNavbarOpen}
        onClick={() => setIsMobileNavbarOpen(!isMobileNavbarOpen)}
        right="50px"
        top="40px"
        maxDisplaySize={mobileVersionMaxWidth}
      />
    </Wrapper>
  );
};
