import React from 'react';
import { SimpleCards } from './SimpleCards/SimpleCards';

type Card = {
  photo: any;
  price: string;
  services: Array<string>;
};

type ServiceCardsProps = {
  type: 'simple-card';
  cardsArray: Array<Card>;
  color?: string;
  backgroundColor?: string;
};

export const ServiceCards = ({
  type,
  cardsArray,
  color,
  backgroundColor,
}: ServiceCardsProps) => {
  if (type === 'simple-card') {
    return (
      <SimpleCards
        cardsArray={cardsArray}
        color={color}
        backgroundColor={backgroundColor}
      />
    );
  }
  return null;
};
