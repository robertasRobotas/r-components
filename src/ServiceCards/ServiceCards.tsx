import React from 'react';
import { SimpleCards } from './SimpleCards/SimpleCards';
import { ReverseSimpleCards } from './ReverseSimpleCards/ReverseSimpleCards';

type Card = {
  photo: any;
  price: string;
  services: Array<string>;
};

type ServiceCardsProps = {
  type: 'simple-card' | 'reverse-simple-card';
  cardsArray: Array<Card>;
  color?: string;
  backgroundColor?: string;
  mobileVersionMaxWidth: string;
};

export const ServiceCards = ({
  type,
  cardsArray,
  color,
  backgroundColor,
  mobileVersionMaxWidth,
}: ServiceCardsProps) => {
  if (type === 'simple-card') {
    return (
      <SimpleCards
        cardsArray={cardsArray}
        color={color}
        backgroundColor={backgroundColor}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
      />
    );
  }

  if (type === 'reverse-simple-card') {
    return (
      <ReverseSimpleCards
        cardsArray={cardsArray}
        color={color}
        backgroundColor={backgroundColor}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
      />
    );
  }
  return null;
};
