import React from 'react';
import { SimpleSection } from './SimpleSection/SimpleSection';

type AboutUsProps = {
  type: 'simple-section';
  photo: string;
  title: string;
  text: string;

  mobileVersionMaxWidth: string;

  backgroundColor: string;
  photoWidth?: string;
  photoHeight?: string;
};

export const AboutUsSection = ({
  type,
  photo,
  title,
  text,
  mobileVersionMaxWidth,
  backgroundColor,
  photoWidth,
  photoHeight,
}: AboutUsProps) => {
  if (type === 'simple-section' && photo && title && text) {
    return (
      <SimpleSection
        photo={photo}
        title={title}
        text={text}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
        backgroundColor={backgroundColor}
        photoWidth={photoWidth}
        photoHeight={photoHeight}
      />
    );
  }
  return null;
};
