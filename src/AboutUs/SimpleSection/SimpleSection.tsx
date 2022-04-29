import React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div<any>`
  padding-top: 100px;
`;

const Wrapper = styled.div<any>`
  display: grid;
  gap: 30px;

  background-color: ${(props) => props.backgroundColor};
  padding-top: 20px;
  padding-bottom: 20px;
  min-width: 375px;
`;

const ContentWrapper = styled.div<any>`
  position: relative;
  bottom: 50px;

  display: flex;
  justify-items: center;
  gap: 60px;
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    justify-items: start;
    display: grid;
  }
`;

const Photo = styled.div<any>`
  position: relative;
  bottom: 40px;
  background-image: ${(props: any) => `url(${props.photoUrl})`};
  width: ${(props) => (props.photoWidth ? props.photoWidth : '450px')};
  height: ${(props) => (props.photoHeight ? props.photoHeight : '650px')};
  min-width: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  order: 1;
  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    order: 2;
    width: 250px;
    height: 400px;
    min-width: 260px;
  }
`;

const TextWrapper = styled.div<any>`
  order: 2;
  @media (max-width: ${(props) => props.mobileVersionMaxWidth}) {
    order: 1;
  }
`;

const Title = styled.div<any>`
  font-size: 50px;
  margin-bottom: 30px;
`;

const Text = styled.div<any>`
  max-width: 600px;
  line-height: 2;
  white-space: pre-line;
  letter-spacing: 1.5px;
`;

type AboutUsProps = {
  photo: string;
  title: string;
  text: string;

  mobileVersionMaxWidth: string;

  backgroundColor: string;
  photoWidth?: string;
  photoHeight?: string;
};

export const SimpleSection = ({
  photo,
  title,
  text,
  mobileVersionMaxWidth,
  backgroundColor,
  photoWidth,
  photoHeight,
}: AboutUsProps) => {
  return (
    <ComponentWrapper>
      <Wrapper backgroundColor={backgroundColor}>
        <ContentWrapper mobileVersionMaxWidth={mobileVersionMaxWidth}>
          <Photo
            mobileVersionMaxWidth={mobileVersionMaxWidth}
            photoUrl={photo}
            photoWidth={photoWidth}
            photoHeight={photoHeight}
          />
          <TextWrapper mobileVersionMaxWidth={mobileVersionMaxWidth}>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </TextWrapper>
        </ContentWrapper>
      </Wrapper>
    </ComponentWrapper>
  );
};
