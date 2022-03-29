import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { PhotoViewer } from '../src';
import photo1 from './assets/1.png';
import photo2 from './assets/2.png';
import photo3 from './assets/3.png';
import photo4 from './assets/4.png';
import photo5 from './assets/5.png';
import photo6 from './assets/6.png';

const meta: Meta = {
  title: 'Menu-Button',
  component: PhotoViewer,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const photoArray = [
  photo1.src,
  photo2.src,
  photo3.src,
  photo4.src,
  photo5.src,
  photo6.src,
];

export const Button: Story = (args) => {
  const [isopen, setIsPressed] = useState(true);
  return (
    <PhotoViewer
      photoSrcArray={photoArray}
      currentPhotoSrc={photo2.src}
      isOpen={isopen}
      onClose={() => setIsPressed(false)}
    />
  );
};
