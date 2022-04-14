import React from 'react';
import { SimpleCarouselReviews } from './SimpleCarouselReview/SimpleCarouselReview';

type Review = {
  reviewText: string;
  reviewerName: string;
  reviewerPhotoSrc?: string;
};

type ReviewCardsProps = {
  type: 'simple-carousel-review';
  reviews: Array<Review>;

  autoPlay?: boolean;
  minWebsiteWidth: string;
  mobileVersionMaxWidth: string;
  color?: string;
  intervalTime?: number;
  rightArrowComponent?: string;
  letterSpacing?: string;
  backgroundColor?: string;
};

export const ReviewCards = ({
  type,
  reviews,
  color,
  intervalTime,
  rightArrowComponent,
  letterSpacing,
  backgroundColor,
  autoPlay,
  mobileVersionMaxWidth,
}: ReviewCardsProps) => {
  if (type === 'simple-carousel-review' && reviews) {
    return (
      <SimpleCarouselReviews
        autoPlay={autoPlay || false}
        reviews={reviews}
        color={color}
        intervalTime={intervalTime}
        rightArrowComponent={rightArrowComponent}
        letterSpacing={letterSpacing}
        backgroundColor={backgroundColor}
        mobileVersionMaxWidth={mobileVersionMaxWidth}
      />
    );
  }
  return null;
};
