import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    <Carousel>
      <div>
        <img src="assets/1.jpeg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="assets/2.jpeg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="assets/3.jpeg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
