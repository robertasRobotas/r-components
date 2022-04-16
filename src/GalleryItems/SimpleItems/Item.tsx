import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<any>`
  display: flex;
  height: 400px;
  margin: auto;
  width: 100%;
  cursor: pointer;

  ${(props) =>
    props.isHover &&
    css`
      background: ${(props) => props.backgroundHoverColor};
    `}
`;

const ContentWrapper = styled.div<any>`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  max-width: 1400px;
  margin: auto;
`;

const PhotoWrapper = styled.div<any>``;

const Photo = styled.div<any>`
  width: 600px;
  height: 350px;

  background-image: ${(props: any) => `url(${props.photoUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const TextWrapper = styled.div<any>`
  display: grid;
  width: 500px;
  text-align: center;
  gap: 60px;
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
  onClick: () => void;
};

export const Item = ({
  photo,
  title,
  buttonContent,
  backgroundHoverColor,
  buttonColor,
  onClick,
}: ItemProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Wrapper
      onClick={() => onClick}
      backgroundHoverColor={backgroundHoverColor}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      isHover={isHover}
    >
      <ContentWrapper>
        <PhotoWrapper>
          <Photo photoUrl={photo} />
        </PhotoWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Button buttonColor={buttonColor}>{buttonContent}</Button>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
