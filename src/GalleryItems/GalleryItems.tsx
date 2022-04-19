import React from 'react';
import { SimpleItems } from './SimpleItems/SimpleItems';

type Item = {
  photo: any;
  title: string;
  onClickLink: string;
};

type GalleryCardsProps = {
  type: 'simple-items';
  itemsArray: Array<Item>;
  buttonContent?: string;
  backgroundHoverColor?: string;
  buttonColor: string;
  mobileVersionMaxWidth: string;
  color: string;
};

export const GalleryItems = ({
  type,
  itemsArray,
  buttonContent,
  backgroundHoverColor,
  buttonColor,
  mobileVersionMaxWidth,
  color,
}: GalleryCardsProps) => {
  if (type === 'simple-items') {
    return (
      <SimpleItems
        itemsArray={itemsArray}
        buttonContent={buttonContent}
        backgroundHoverColor={backgroundHoverColor}
        buttonColor={buttonColor}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
        color={color}
      />
    );
  }

  return null;
};
