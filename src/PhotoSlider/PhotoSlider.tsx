import React, { useState } from 'react';
import { Switcher } from './Switcher';
import { useInterval } from '../hooks/useInterval';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div<any>`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BackgroundPhoto = styled.div<any>`
  transition: 0.4s;
  width: 100%;
  height: ${(props: any) => props.height};
  background-image: ${(props: any) => `url(${props.photoUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1;

  ${(props) =>
    props.isActiveTransition &&
    css`
      opacity: 0;
    `}
`;

export const SwitcherWrapper = styled.div<any>`
  position: absolute;
  left: 50%;
  bottom: 45px;
`;

type PhotoSliderProps = {
  photoSrcArray: Array<String>;
  sliderHeight: string;
  switcherType?: 'circles' | 'pagination';
  switcherColor?: string;
  switcherSize?: string;
  photoShowDurationSec: number;
};

export const PhotoSlider = ({
  photoSrcArray,
  sliderHeight,
  switcherType,
  switcherSize,
  photoShowDurationSec,
  switcherColor,
}: PhotoSliderProps) => {
  const TRANSITION_TIME_SEC = 0.3;
  const [currentPhotoId, setCurrentPhotoId] = useState(0);
  const [isActiveTransition, setActiveTransition] = useState(false);

  const resetInterval = useInterval(() => {
    console.log('currentPhotoId', currentPhotoId);
    openNextPhoto();
  }, photoShowDurationSec * 1000);

  function timeout(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const openNextPhoto = async () => {
    setActiveTransition(true);
    await timeout(TRANSITION_TIME_SEC * 1000 * 2);

    if (currentPhotoId >= photoSrcArray.length - 1) {
      setCurrentPhotoId(0);
    } else {
      setCurrentPhotoId(currentPhotoId + 1);
    }
    await timeout(TRANSITION_TIME_SEC * 1000);

    setActiveTransition(false);
  };

  const openPreviousPhoto = async () => {
    setActiveTransition(true);
    await timeout(TRANSITION_TIME_SEC * 1000 * 2);
    if (currentPhotoId <= 0) {
      setCurrentPhotoId(photoSrcArray.length - 1);
    } else {
      setCurrentPhotoId(currentPhotoId - 1);
    }
    await timeout(TRANSITION_TIME_SEC * 1000);

    setActiveTransition(false);
  };

  const openSpecificPhoto = (index: number) => {
    setCurrentPhotoId(index);
  };

  return (
    <Wrapper>
      <BackgroundPhoto
        height={sliderHeight}
        photoUrl={photoSrcArray[currentPhotoId]}
        onClick={() => {
          openNextPhoto();
          resetInterval();
        }}
        isActiveTransition={isActiveTransition}
      />
      <SwitcherWrapper>
        <Switcher
          size={switcherSize}
          switcherType={switcherType || 'pagination'}
          currentPhotoNumber={currentPhotoId + 1}
          photosLength={photoSrcArray.length}
          openNextPhotoClick={openNextPhoto}
          openPreviousPhotoClick={openPreviousPhoto}
          onSpecificPhotoClick={openSpecificPhoto}
          color={switcherColor}
          resetInterval={resetInterval}
        />
      </SwitcherWrapper>
    </Wrapper>
  );
};
