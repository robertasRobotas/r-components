import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { ServiceCards } from '../src';
import photo1 from './assets/1.png';
import photo2 from './assets/2.png';
import photo3 from './assets/3.png';

const meta: Meta = {
  title: 'Service Cards',
  component: ServiceCards,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const cardsArray = [
  {
    photo: photo1,
    price: '3 val. / 350€',
    services: [
      'Ne mažiau 100 retušuotų nuotraukų',
      'Redagavimas iki 2 mėn.',
      'Anonsas per 2 sav.',
      'Papildoma 1 val.  / 100€',
      'Atvykimas į šventės vietą nuo Vilniaus: 100 km / 15€',
      'Priešvestuvinė fotosesija 70€',
    ],
  },
  {
    photo: photo2,
    price: '3 val. / 350€',
    services: [
      'Ne mažiau 100 retušuotų nuotraukų',
      'Redagavimas iki 2 mėn.',
      'Anonsas per 2 sav.',
      'Papildoma 1 val.  / 100€',
      'Atvykimas į šventės vietą nuo Vilniaus: 100 km / 15€',
      'Priešvestuvinė fotosesija 70€',
    ],
  },
  {
    photo: photo3,
    price: '3 val. / 350€',
    services: [
      'Ne mažiau 100 retušuotų nuotraukų',
      'Redagavimas iki 2 mėn.',
      'Anonsas per 2 sav.',
      'Papildoma 1 val.  / 100€',
      'Atvykimas į šventės vietą nuo Vilniaus: 100 km / 15€',
      'Priešvestuvinė fotosesija 70€',
    ],
  },
];

export const ServiceCardsComponent: Story = (args) => {
  return (
    <ServiceCards
      type="simple-card"
      cardsArray={cardsArray}
      color="#3E3E3E"
      backgroundColor="#DFE4ED"
    />
  );
};
