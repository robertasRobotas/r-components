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
};

export const GalleryItems = ({
  type,
  itemsArray,
  buttonContent,
  backgroundHoverColor,
  buttonColor,
}: GalleryCardsProps) => {
  if (type === 'simple-items') {
    return (
      <SimpleItems
        itemsArray={itemsArray}
        buttonContent={buttonContent}
        backgroundHoverColor={backgroundHoverColor}
        buttonColor={buttonColor}
      />
    );
  }

  return null;
};
