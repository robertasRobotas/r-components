import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled, { css } from 'styled-components';
import { RightArrow } from '../assets/rightArrow';
import { LeftArrow } from '../assets/leftArrow';

export const Wrapper = styled.div<any>`
  padding-top: 200px;
  color: ${(props) => props.color};
`;

export const ItemsWrapper = styled.div<any>`
  width: 100%;
  height: auto;
  min-height: 430px;

  background-color: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ' #dfe4ed'};

  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 40px;
`;

export const ContentWrapper = styled.div<any>`
  max-width: 1400px;
  display: flex;
  gap: 3%;
  justify-content: center;
  margin: auto;
`;

export const PhotoWrapper = styled.div<any>`
  height: 0;
`;

export const Photo = styled.div<any>`
  background-image: ${(props: any) => `url(${props.photoUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 375px;
  position: relative;
  bottom: 120px;
`;

export const TextWrapper = styled.div<any>`
  letter-spacing: ${(props) => props.letterSpacing};
`;

export const Title = styled.div<any>`
  font-size: 40px;
  text-align: left;
  position: relative;
  bottom: 25px;
  left: 60px;
`;

export const ReviewText = styled.div<any>`
  width: auto;
  max-width: 800px;
  padding: 50px 30px;
  background: #fcfcfc;
  font-size: 22px;
  line-height: 1.8;
  margin-top: 30px;
`;

export const RightArrowWrapper = styled.div<any>`
  z-index: 10;
  position: absolute;
  top: 60%;
  right: 40px;
  cursor: pointer;
`;

export const LeftArrowWrapper = styled.div<any>`
  z-index: 10;
  position: absolute;
  top: 60%;
  left: 40px;
  cursor: pointer;
`;

type Review = {
  reviewText: string;
  reviewerName: string;
  photo?: any;
};

type ReviewProps = {
  reviewText: string;
  reviewerName: string;
  photo: any;

  color?: string;
  letterSpacing?: string;
  backgroundColor?: string;
};

type ReviewsProps = {
  reviews: Array<Review>;
  autoPlay: boolean;

  color?: string;
  intervalTime?: number;
  rightArrowComponent?: string;
  letterSpacing?: string;
  backgroundColor?: string;
};

export const ReviewCard = ({
  reviewText,
  reviewerName,
  photo,
  color,
  letterSpacing,
  backgroundColor,
}: ReviewProps) => {
  return (
    <Wrapper color={color}>
      <ItemsWrapper backgroundColor={backgroundColor}>
        <ContentWrapper>
          <PhotoWrapper>
            <Photo photoUrl={photo} />
          </PhotoWrapper>
          <TextWrapper letterSpacing={letterSpacing}>
            <Title>{reviewerName}</Title>
            <ReviewText>{reviewText}</ReviewText>
          </TextWrapper>
        </ContentWrapper>
      </ItemsWrapper>
    </Wrapper>
  );
};

export const SimpleCarouselReviews = ({
  autoPlay,
  reviews,
  color,
  intervalTime,
  rightArrowComponent,
  letterSpacing,
  backgroundColor,
}: ReviewsProps) => {
  console.log('reviews', reviews);
  return (
    <Carousel
      autoPlay={autoPlay}
      interval={intervalTime}
      renderArrowPrev={(increment) => (
        <LeftArrowWrapper>
          <LeftArrow onClick={() => increment()} />
        </LeftArrowWrapper>
      )}
      renderArrowNext={(increment) => (
        <RightArrowWrapper>
          <RightArrow onClick={() => increment()} />
        </RightArrowWrapper>
      )}
    >
      {reviews.map((review) => (
        <ReviewCard
          reviewText={review.reviewText}
          reviewerName={review.reviewerName}
          photo={review.photo}
          color={color}
          backgroundColor={backgroundColor}
          letterSpacing={letterSpacing}
        />
      ))}
    </Carousel>
  );
};
