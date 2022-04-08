import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled, { css } from 'styled-components';
import photo1 from '../../../stories/assets/1.png';
import photo2 from '../../../stories/assets/2.png';
import photo3 from '../../../stories/assets/3.png';

export const Wrapper = styled.div<any>`
  padding-top: 200px;
`;

export const ItemsWrapper = styled.div<any>`
  width: 100%;
  height: auto;
  min-height: 430px;

  background-color: #dfe4ed;
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

export const TextWrapper = styled.div<any>``;

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

type Review = {
  reviewText: string;
  reviewerName: string;
  reviewerPhotoSrc?: string;
};

type ReviewCardsProps = {
  reviews: Array<Review>;

  color?: string;
  intervalTime?: number;
  rightArrowComponent?: string;
  letterSpacing?: string;
  backgroundColor?: string;
};

export const SimpleCarouselReview = ({
  reviews,
  color,
  intervalTime,
  rightArrowComponent,
  letterSpacing,
  backgroundColor,
}: ReviewCardsProps) => {
  console.log('reviews', reviews);
  return (
    <Carousel
      renderArrowPrev={(increment) => (
        <div onClick={() => increment()}>xxxx</div>
      )}
      renderArrowNext={(increment) => (
        <div onClick={() => increment()}>xxxx</div>
      )}
    >
      <Wrapper>
        <ItemsWrapper>
          <ContentWrapper>
            <PhotoWrapper>
              <Photo photoUrl={photo1} />
            </PhotoWrapper>
            <TextWrapper>
              <Title>G & J</Title>
              <ReviewText>
                Pati geriausia diena po vestuvių šventės – diena, kai gavome
                vestuvių nuotraukas. Morta išpildė mūsų lūkesčius visu 100% –
                jos yra atspindys to, kas mes esam ir ko mes norėjom. Tikros,
                nuoširdžios, stilingos ir juokingos. Ačiū, kad vienintelę ir
                nepakartojamą dieną galime išgyventi dar kartą nors ir kasdien!
              </ReviewText>
            </TextWrapper>
          </ContentWrapper>
        </ItemsWrapper>
      </Wrapper>

      <Wrapper>d</Wrapper>
    </Carousel>
  );
};
