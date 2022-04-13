import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const Wrapper = styled.div<any>`
  display: grid;
  gap: 30px;
`;

type Card = {
  photo: any;
  price: string;
  services: Array<string>;
};

type SimpleCardsProps = {
  cardsArray: Array<Card>;
  backgroundColor?: string;
};

export const SimpleCards = ({
  cardsArray,
  backgroundColor,
}: SimpleCardsProps) => {
  return (
    <Wrapper>
      {cardsArray.map((card) => (
        <Card
          photo={card.photo}
          price={card.price}
          services={card.services}
          backgroundColor={backgroundColor}
        />
      ))}
    </Wrapper>
  );
};
