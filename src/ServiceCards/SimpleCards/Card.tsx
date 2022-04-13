import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<any>`
  display: grid;
  grid-column-template: auto auto;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;

  background: ${(props) => props.backgroundColor};
`;
const Photo = styled.div<any>``;

const TextWrapper = styled.div<any>``;

const Price = styled.div<any>``;

const ServicesWrapper = styled.div<any>``;

const Service = styled.div<any>``;

type CardProps = {
  photo: any;
  price: string;
  services: Array<string>;
  backgroundColor: string;
};

export const SimpleCards = ({
  photo,
  price,
  services,
  backgroundColor,
}: CardProps) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Photo photo={photo} />
      <TextWrapper>
        <Price>{price}</Price>
        <ServicesWrapper>
          {services.map((service) => (
            <Service>{service}</Service>
          ))}
        </ServicesWrapper>
      </TextWrapper>
    </Wrapper>
  );
};
