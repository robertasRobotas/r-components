import React from 'react';
import styled from 'styled-components';
import { Item } from './Item';

const Wrapper = styled.div<any>`
  display: grid;
`;

const LinkWrapper = styled.a<any>`
  text-decoration: none;
`;

type Item = {
  photo: any;
  title: string;
  onClickLink: string;
};

type SimpleCardsProps = {
  type: 'simple-items' | 'simple-items-reverse' | 'simple-items-changing-sides';
  itemsArray: Array<Item>;
  buttonContent?: string;
  backgroundHoverColor?: string;
  buttonColor: string;
  mobileVersionMaxWidth: string;
  color: string;
};

export const SimpleItems = ({
  itemsArray,
  buttonContent,
  backgroundHoverColor,
  buttonColor,
  mobileVersionMaxWidth,
  color,
  type,
}: SimpleCardsProps) => {
  const isReverseCard = (type: string, index: number): boolean => {
    if (type === 'simple-items') {
      return false;
    }

    if (type === 'simple-items-reverse') {
      return true;
    }

    if (type === 'simple-items-changing-sides') {
      return index % 2 === 1;
    }
    return false;
  };

  return (
    <Wrapper>
      {itemsArray.map((card, index) => (
        <LinkWrapper href={card.onClickLink}>
          <Item
            isReverseCard={isReverseCard(type, index)}
            photo={card.photo}
            title={card.title}
            buttonContent={buttonContent}
            buttonColor={buttonColor}
            backgroundHoverColor={backgroundHoverColor}
            mobileVersionMaxWidth={mobileVersionMaxWidth}
            color={color}
          />
        </LinkWrapper>
      ))}
    </Wrapper>
  );
};
