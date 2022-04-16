import React from 'react';
import styled from 'styled-components';
import { Item } from './Item';

const Wrapper = styled.div<any>`
  display: grid;
`;

type Item = {
  photo: any;
  title: string;
};

type SimpleCardsProps = {
  itemsArray: Array<Item>;
  buttonContent?: string;
  backgroundHoverColor?: string;
  buttonColor: string;
  mobileVersionMaxWidth: string;
};

export const SimpleItems = ({
  itemsArray,
  buttonContent,
  backgroundHoverColor,
  buttonColor,
  mobileVersionMaxWidth,
}: SimpleCardsProps) => {
  return (
    <Wrapper>
      {itemsArray.map((card) => (
        <Item
          photo={card.photo}
          title={card.title}
          buttonContent={buttonContent}
          buttonColor={buttonColor}
          backgroundHoverColor={backgroundHoverColor}
          mobileVersionMaxWidth={mobileVersionMaxWidth}
        />
      ))}
    </Wrapper>
  );
};
