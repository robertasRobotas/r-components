import React, { useState } from 'react';
import styled from 'styled-components';
import { MenuButton } from '../../MenuButton/MenuButton';

const Wrapper = styled.div<any>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1200px')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'white'};
  font-color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
  display: flex;
  align-content: center;

  @media (max-width: ${(props) => props.maxWidth}) {
    display: none;
  }
`;
const Link = styled.a<any>``;
const Logo = styled.div<any>``;

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
  logoSrc?: string;
  logoWidth?: string;
};

export const LogoMiddleNavbar = ({
  oneDimentionalMenuLinks,
  maxWidth,
  mobileVersionMaxWidth,
  backgroundColor,
  fontColor,
  logoSrc,
  logoWidth,
}: NavbarProps) => {
  const [isMobileHeaderOpen, setIsMobileHeaderOpen] = useState(false);

  return (
    <Wrapper
      maxWidth={maxWidth}
      mobileVersionMaxWidth={mobileVersionMaxWidth}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
    >
      <Link src={oneDimentionalMenuLinks[0].link}>
        {oneDimentionalMenuLinks[0].title}
      </Link>
      <Link src={oneDimentionalMenuLinks[1].link}>
        {oneDimentionalMenuLinks[1].title}
      </Link>

      <Logo
        mobileVersionMaxWidth={mobileVersionMaxWidth}
        src={logoSrc}
        logoWidth={logoWidth}
      />

      <Link src={oneDimentionalMenuLinks[2].link}>
        {oneDimentionalMenuLinks[2].title}
      </Link>
      <Link src={oneDimentionalMenuLinks[3].link}>
        {oneDimentionalMenuLinks[3].title}
      </Link>

      <MenuButton
        isPressed={isMobileHeaderOpen}
        onClick={() => setIsMobileHeaderOpen(!isMobileHeaderOpen)}
        right="50px"
        top="40px"
        maxDisplaySize={mobileVersionMaxWidth}
      />
    </Wrapper>
  );
};
