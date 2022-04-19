import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { GalleryItems } from '../src';
import photo1 from './assets/1.png';
import photo2 from './assets/2.png';
import photo3 from './assets/3.png';

const meta: Meta = {
  title: 'Gallery Items',
  component: GalleryItems,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const itemsArray = [
  {
    photo: photo1,
    title: 'G&A / Stilinga antroji vestuvių diena ',
    onClickLink: '/photo',
  },
  {
    photo: photo2,
    title: 'G&J / Vestuvės Vilniaus senamiesty',
    onClickLink: '/photo',
  },
  {
    photo: photo3,
    title: 'GLORIJA IR ARNOLDAS',
    onClickLink: '/photo',
  },
];

export const GalleryItemsComponent: Story = (args) => {
  return (
    <GalleryItems
      type="simple-items"
      itemsArray={itemsArray}
      buttonContent="Žiūreti"
      backgroundHoverColor="#DFE4ED"
      buttonColor="#BCA183"
      mobileVersionMaxWidth="767px"
      color="#707070"
    />
  );
};
