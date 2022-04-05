import React from 'react';
import { Icon } from './Icon';

type SocialMediaProps = {
  type: string;
  link: string;
};

type SocialIconsProps = {
  width?: string;
  height?: string;
  socialMedia: Array<SocialMediaProps>;
};

export const SocialIcons = ({ socialMedia }: SocialIconsProps) => {
  return (
    <>
      {socialMedia.map((socMediaItem) => (
        <a href={socMediaItem.link}>
          <Icon imgSrc={'xxxxx'} />
        </a>
      ))}
    </>
  );
};
