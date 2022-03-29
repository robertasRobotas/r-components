import React, { useEffect, useState } from 'react';
import { Switcher } from './Switcher';

import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  width: 100%;
  height: 100%;
`;

export const BackgroundPhoto = styled.div<any>`
  width: 100%;
  height: ${(props: any) => props.height};
  background-image: ${(props: any) => `url(${props.photoUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const SwitcherWrapper = styled.div<any>`
  position: absolute;
`;

type PhotoSliderProps = {
  photoSrcArray: Array<String>;
  sliderHeight: string;
  switcherType?: 'circles' | 'pagination';
};

export const PhotoSlider = ({
  photoSrcArray,
  sliderHeight,
  switcherType,
}: PhotoSliderProps) => {
  const [currentPhotoId, setCurrentPhotoId] = useState(0);

  const openNextPhoto = () => {
    if (currentPhotoId >= photoSrcArray.length - 1) {
      setCurrentPhotoId(0);
    } else {
      setCurrentPhotoId(currentPhotoId + 1);
    }
  };

  const openPreviousPhoto = () => {
    if (currentPhotoId <= 0) {
      setCurrentPhotoId(photoSrcArray.length - 1);
    } else {
      setCurrentPhotoId(currentPhotoId - 1);
    }
  };

  const openSpecificPhoto = (index: number) => {
    setCurrentPhotoId(index);
  };

  return (
    <Wrapper>
      <BackgroundPhoto height={sliderHeight} photoUrl={photoSrcArray[0]} />
      <SwitcherWrapper>
        <Switcher
          switcherType={switcherType}
          currentPhotoNumber={currentPhotoId + 1}
          photosLength={photoSrcArray.length}
          openNextPhotoClick={openNextPhoto}
          openPreviousPhotoClick={openPreviousPhoto}
          onSpecificPhotoClick={openSpecificPhoto}
        />
      </SwitcherWrapper>
    </Wrapper>
  );
};
