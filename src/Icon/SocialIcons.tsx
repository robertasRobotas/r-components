import React from 'react';
import { SocialFacebook, SocialGmail, SocialInstagram } from './asset';

type SocialMediaProps = {
  type: string;
  link: string;
};

type SocialIconsProps = {
  width?: string;
  height?: string;
  socialMedia: Array<SocialMediaProps>;
};

const selectIcon = (type: string) => {
  switch (type) {
    case 'facebook':
      return <SocialFacebook color="black" />;
    case 'instagram':
      return <SocialInstagram color="black" />;
    case 'gmail':
      return <SocialGmail color="black" />;
    default:
      console.log(`no such social icon type`);
  }
};

export const SocialIcons = ({
  socialMedia,
  width = '20px',
  height = '20px',
}: SocialIconsProps) => {
  return (
    <>
      {socialMedia.map((socMediaItem) => (
        <a href={socMediaItem.link}>{selectIcon(socMediaItem.type)}</a>
      ))}
    </>
  );
};
