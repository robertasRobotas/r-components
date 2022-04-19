import React from 'react';
import { EnterButton } from './EnterButton/EnterButton';

type ReviewCardsProps = {
  type: 'enter-button';
  mainColor: string;
  invertedColor: string;
  fontSize: string;
  content: string;
  width: string;
  height: string;
  isHover?: boolean;
};

export const Button = ({
  width,
  height,
  type,
  mainColor,
  invertedColor,
  fontSize,
  content,
  isHover,
}: ReviewCardsProps) => {
  if (type === 'enter-button') {
    return (
      <EnterButton
        width={width}
        height={height}
        mainColor={mainColor}
        fontSize={fontSize}
        invertedColor={invertedColor}
        content={content}
        isHover={isHover}
      />
    );
  }
  return null;
};
