import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  gap: 80px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;

  background: ${(props) => props.backgroundColor};
`;
const Photo = styled.div<any>`
  width: 450px;
  height: 450px;
  background-image: ${(props: any) => `url(${props.photoUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const TextWrapper = styled.div<any>``;

const Price = styled.div<any>`
  font-size: 30px;
`;

const ServicesWrapper = styled.div<any>`
  display: grid;
  gap: 48px;
`;

const Service = styled.div<any>``;

const Line = styled.hr<any>`
  width: 100px;
  margin-bottom: 50px;
  margin-left: 0;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
`;

type CardProps = {
  photo: any;
  price: string;
  services: Array<string>;
  color?: string;
  backgroundColor?: string;
};

export const Card = ({
  photo,
  price,
  services,
  color,
  backgroundColor,
}: CardProps) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Photo photoUrl={photo} />
      <TextWrapper>
        <Price>{price}</Price>
        <Line />
        <ServicesWrapper>
          {services.map((service) => (
            <Service>{service}</Service>
          ))}
        </ServicesWrapper>
      </TextWrapper>
    </Wrapper>
  );
};
