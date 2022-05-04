import React from 'react';
import styled from 'styled-components';
import { Card } from './Card';

const Wrapper = styled.div<any>`
  display: grid;
  gap: 90px;
`;

type Card = {
  photo: any;
  price: string;
  services: Array<string>;
};

type SimpleCardsProps = {
  cardsArray: Array<Card>;
  color?: string;
  backgroundColor?: string;
  mobileVersionMaxWidth: string;
};

export const SimpleCards = ({
  cardsArray,
  color,
  backgroundColor,
  mobileVersionMaxWidth,
}: SimpleCardsProps) => {
  return (
    <Wrapper>
      {cardsArray.map((card) => (
        <Card
          photo={card.photo}
          price={card.price}
          services={card.services}
          color={color}
          backgroundColor={backgroundColor}
          mobileVersionMaxWidth={mobileVersionMaxWidth}
        />
      ))}
    </Wrapper>
  );
};
