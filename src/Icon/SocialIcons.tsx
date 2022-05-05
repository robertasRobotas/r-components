import React, { useState } from 'react';
import { SocialFacebook, SocialGmail, SocialInstagram } from './asset';
import styled from 'styled-components';

const ImgWrapper = styled.div<any>`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

type SocialMediaProps = {
  type: string;
  link: string;
};

type SocialIconsProps = {
  width?: string;
  height?: string;
  socialMedia: Array<SocialMediaProps>;
  color?: string;
  hoverColor?: string;
};

type SocialIconProps = {
  link: string;
  type: string;
  color?: string;
  hoverColor?: string;
  width?: string;
  height?: string;
};

const selectIcon = (type: string, color: string) => {
  console.log('x', color);
  switch (type) {
    case 'facebook':
      return <SocialFacebook color={color} />;
    case 'instagram':
      return <SocialInstagram color={color} />;
    case 'gmail':
      return <SocialGmail color={color} />;
    default:
      console.log(`no such social icon type`);
  }
};

const SocialIcon = ({
  link,
  type,
  // width = '20px',
  // height = '20px',
  color = 'black',
  hoverColor = 'black',
}: SocialIconProps) => {
  const [currentColor, setCurrentColor] = useState(color);
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setCurrentColor(hoverColor)}
      onMouseLeave={() => setCurrentColor(color)}
      href={link}
    >
      {selectIcon(type, currentColor)}
    </a>
  );
};

export const SocialIcons = ({
  socialMedia,
  width = '20px',
  height = '20px',
  color = 'black',
  hoverColor = 'black',
}: SocialIconsProps) => {
  return (
    <ImgWrapper>
      {socialMedia.map((socMediaItem) => (
        <SocialIcon
          width={width}
          height={height}
          link={socMediaItem.link}
          type={socMediaItem.type}
          color={color}
          hoverColor={hoverColor}
        />
      ))}
    </ImgWrapper>
  );
};
