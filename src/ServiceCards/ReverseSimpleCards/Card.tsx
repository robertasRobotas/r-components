import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<any>`
  display: flex;
  justify-content: center;
  gap: 80px;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  min-width:375px;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;

  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    display: grid;

    b
  }
`;
const Photo = styled.div<any>`
  width: 450px;
  height: 450px;
  background-image: ${(props: any) => `url(${props.photoUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  order: 2;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    height: 200px;
    width: 100%;
  }
`;

const TextWrapper = styled.div<any>`
  order: 1;
  text-align: right;
`;

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
  margin-right: 0;
  display: block;
  height: 1px;
  border: 0;
  border-top: ${(props) =>
    props.color ? `1px solid ${props.color}` : `1px solid #ccc`};
  padding: 0;
`;

type CardProps = {
  photo: any;
  price: string;
  services: Array<string>;
  color?: string;
  backgroundColor?: string;
  mobileVersionMaxWidth: string;
};

export const Card = ({
  photo,
  price,
  services,
  color,
  backgroundColor,
  mobileVersionMaxWidth,
}: CardProps) => {
  return (
    <Wrapper
      color={color}
      backgroundColor={backgroundColor}
      mobileVersionMaxWidth={mobileVersionMaxWidth}
    >
      <Photo photoUrl={photo} mobileVersionMaxWidth={mobileVersionMaxWidth} />
      <TextWrapper mobileVersionMaxWidth={mobileVersionMaxWidth}>
        <Price>{price}</Price>
        <Line color={color} />
        <ServicesWrapper>
          {services.map((service) => (
            <Service>{service}</Service>
          ))}
        </ServicesWrapper>
      </TextWrapper>
    </Wrapper>
  );
};
