import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ReviewCards } from '../src';

const meta: Meta = {
  title: 'ReviewCard',
  component: ReviewCards,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const reviews = [
  {
    reviewText: 'some good review',
    reviewerName: 'Tom',
    reviewerPhotoSrc: 'reviewerPhotoSrc',
  },
  {
    reviewText: 'some good review',
    reviewerName: 'Tom',
    reviewerPhotoSrc: 'reviewerPhotoSrc',
  },
  {
    reviewText: 'some good review',
    reviewerName: 'Tom',
    reviewerPhotoSrc: 'reviewerPhotoSrc',
  },
  {
    reviewText: 'some good review',
    reviewerName: 'Tom',
    reviewerPhotoSrc: 'reviewerPhotoSrc',
  },
];

export const ReviewCardComponent: Story = (args) => {
  return (
    <ReviewCards
      type="simple-carousel-review"
      reviews={reviews}
      mobileVersionMaxWidth="767px"
      backgroundColor="#DFE4ED"
      minWebsiteWidth={'375px'}
      color="#3E3E3E"
      letterSpacing="2px"
    />
  );
};
