import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<any>`
  display: flex;
  height: 400px;
  margin: auto;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;

  ${(props) =>
    props.isHover &&
    css<any>`
      background: ${(props) => props.backgroundHoverColor};
    `}

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

const ContentWrapper = styled.div<any>`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: auto;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    display: grid;
  }
`;

const PhotoWrapper = styled.div<any>`
  order: 1;
  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    order: 2;
  }
`;

const Photo = styled.div<any>`
  width: 600px;
  height: 350px;

  background-image: ${(props: any) => `url(${props.photoUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: 1200px) {
    width: 450px;
  }

  @media (max-width: 1000px) {
    width: 320px;
  }

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    width: 300px;
  }
`;

const TextWrapper = styled.div<any>`
  display: grid;
  width: 500px;
  text-align: center;
  gap: 60px;

  @media (max-width: 1200px) {
    width: 400px;
  }

  @media (max-width: 1000px) {
    width: 300px;
  }

  order: 2;
  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    order: 1;
    gap: 30px;
  }
`;
const Title = styled.div<any>`
  letter-spacing: 1px;
`;
const Button = styled.div<any>``;

type ItemProps = {
  photo: any;
  title: string;
  buttonContent: any;
  backgroundHoverColor?: string;
  buttonColor: string;
  mobileVersionMaxWidth: string;
};

export const Item = ({
  photo,
  title,
  buttonContent,
  backgroundHoverColor,
  mobileVersionMaxWidth,
  buttonColor,
}: ItemProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Wrapper
      mobileVersionMaxWidth={mobileVersionMaxWidth}
      backgroundHoverColor={backgroundHoverColor}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      isHover={isHover}
    >
      <ContentWrapper mobileVersionMaxWidth={mobileVersionMaxWidth}>
        <PhotoWrapper mobileVersionMaxWidth={mobileVersionMaxWidth}>
          <Photo
            photoUrl={photo}
            mobileVersionMaxWidth={mobileVersionMaxWidth}
          />
        </PhotoWrapper>
        <TextWrapper mobileVersionMaxWidth={mobileVersionMaxWidth}>
          <Title>{title}</Title>
          <Button buttonColor={buttonColor}>{buttonContent}</Button>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
