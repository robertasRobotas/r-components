import React from 'react';
import { SimpleItems } from './SimpleItems/SimpleItems';

type Item = {
  photo: any;
  title: string;
  onClickLink: string;
};

type GalleryCardsProps = {
  type: 'simple-items' | 'simple-items-reverse' | 'simple-items-changing-sides';
  onClick?: () => void;
  itemsArray: Array<Item>;
  buttonContent?: string;
  backgroundHoverColor?: string;
  buttonColor: string;
  mobileVersionMaxWidth: string;
  color: string;
};

export const GalleryItems = ({
  type,
  onClick,
  itemsArray,
  buttonContent,
  backgroundHoverColor,
  buttonColor,
  mobileVersionMaxWidth,
  color,
}: GalleryCardsProps) => {
  if (
    type === 'simple-items' ||
    type === 'simple-items-reverse' ||
    type === 'simple-items-changing-sides'
  ) {
    return (
      <SimpleItems
        type={type}
        itemsArray={itemsArray}
        buttonContent={buttonContent}
        backgroundHoverColor={backgroundHoverColor}
        buttonColor={buttonColor}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
        color={color}
        onClick={onClick}
      />
    );
  }

  return null;
};
