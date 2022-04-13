import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { PhotoLine } from '../src';
import photo1 from './assets/1.png';
import photo2 from './assets/2.png';
import photo3 from './assets/3.png';
import photo4 from './assets/4.png';
import photo5 from './assets/5.png';
import photo6 from './assets/6.png';

const meta: Meta = {
  title: 'Photos Line',
  component: PhotoLine,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const photoArray = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo1,
  photo2,
];

export const PhotosLineCompoennt: Story = (args) => {
  return <PhotoLine photoArray={photoArray} mobileVersionMaxWidth="767px" />;
};
