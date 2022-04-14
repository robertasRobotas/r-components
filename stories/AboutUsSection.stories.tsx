import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { AboutUsSection } from '../src';
import photo1 from './assets/1.png';

const meta: Meta = {
  title: 'About Us Section',
  component: AboutUsSection,
  argTypes: {
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const AboutUsSectionComponent: Story = (args) => {
  return (
    <AboutUsSection
      type="simple-section"
      photo={photo1}
      title="LABAS!"
      text={`esu Morta ir savo mylimo vyro dėka tapau davidavi (-čiene). 

        Meilė fotografijai atsirado visai nejučia nuo pat mažų dienų, kai sekiodavau tėtį, kad jam įamžinus šeimą, būčiau pirmoji jį pakeisianti fotografė. Be viso to, nevengiau ir sunkaus darbo – trikojo nešiojimo. (: 
       Paauglystėje kone puse vakarų baigdavosi žiūrint šeimos albumus ir skaitmenines galerijas. Tai galiausiai išsirutuliojo į troškimą pačiai įamžinti savo ir artimųjų gyvenimą.
        Nors, rodos, viskas nuo pat mažų dienų vedė link ten, kur esu dabar, vis dėlto tik studijų laikais galutinai susivokiau, kad fotografija yra tai, kas įkvepia ir kam noriu skirti savo jėgas ir laiką.
      Tad šiandien esu ne tik diplomuota, bet ir 5 metus savo darbu besimėgaujanti fotografė.
       Esu iš Vilniaus, bet atvyksiu visur, kur tik pasikviesi švęsti Tavo gyvenimą kartu! 
      Kai šypsenos platės ir ašaros riedės, būsiu šalia ir visa tai įamžinsiu..!`}
      mobileVersionMaxWidth="767px"
      backgroundColor="#DFE4ED"
      photoWidth="400px"
      photoHeight="600px"
    />
  );
};
