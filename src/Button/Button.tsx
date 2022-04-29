import React from 'react';
import { EnterButton } from './EnterButton/EnterButton';
import { UnderlinedButton } from './UnderlinedButton/UnderlinedButton';

type ReviewCardsProps = {
  type: 'enter-button' | 'underlined-botton';
  onClick: () => void;
  mainColor: string;
  invertedColor: string;
  fontSize: string;
  content: string;
  width: string;
  height: string;
  isHover?: boolean;
};

export const Button = ({
  onClick,
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
        onClick={onClick}
      />
    );
  }

  if (type === 'underlined-botton') {
    return (
      <UnderlinedButton
        width={width}
        height={height}
        mainColor={mainColor}
        fontSize={fontSize}
        invertedColor={invertedColor}
        content={content}
        isHover={isHover}
        onClick={onClick}
      />
    );
  }
  return null;
};
