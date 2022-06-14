import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ReviewCards } from '../src';
import photo1 from './assets/1.png';

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
    reviewerName: 'G & J',
    reviewText:
      'Pati geriausia diena po vestuvių šventės – diena, kai gavome vestuvių nuotraukas. Morta išpildė mūsų lūkesčius visu 100% – jos yra atspindys to, kas mes esam ir ko mes norėjom. Tikros, nuoširdžios, stilingos ir juokingos. Ačiū, kad vienintelę ir nepakartojamą dieną galime išgyventi dar kartą nors ir kasdien!',
    photo: photo1,
  },
  {
    reviewerName: 'G & J',
    reviewText:
      'Pati geriausia diena po vestuvių šventės – diena, kai gavome vestuvių nuotraukas. Morta išpildė mūsų lūkesčius visu 100% – jos yra atspindys to, kas mes esam ir ko mes norėjom. Tikros, nuoširdžios, stilingos ir juokingos. Ačiū, kad vienintelę ir nepakartojamą dieną galime išgyventi dar kartą nors ir kasdien!',
    photo: photo1,
  },
  {
    reviewerName: 'G & J',
    reviewText:
      'Pati geriausia diena po vestuvių šventės – diena, kai gavome vestuvių nuotraukas. Morta išpildė mūsų lūkesčius visu 100% – jos yra atspindys to, kas mes esam ir ko mes norėjom. Tikros, nuoširdžios, stilingos ir juokingos. Ačiū, kad vienintelę ir nepakartojamą dieną galime išgyventi dar kartą nors ir kasdien!',
    photo: photo1,
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
      intervalTime={5000}
      autoPlay={true}
    />
  );
};
