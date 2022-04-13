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
  backgroundColor: string;
};

export const ServiceCards = ({
  type,
  cardsArray,
  backgroundColor,
}: ServiceCardsProps) => {
  if (type === 'simple-card') {
    return (
      <SimpleCards cardsArray={cardsArray} backgroundColor={backgroundColor} />
    );
  }
  return null;
};
