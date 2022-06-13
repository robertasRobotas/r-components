import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { LeftArrow } from './assets/leftArrow';
import { RightArrow } from './assets/rightArrow';

export const Wrapper = styled.div<any>`
  width: 100%;
  height: 100%;
  font-size: ${(props) => (props.size ? props.size : '28px')};
  transform: translateX(-50%);
  color: ${(props) => (props.color ? props.color : 'black')};
  display: flex;
  align-items: center;
  gap: 15px;
`;

type SwitcherProps = {
  switcherType: 'circles' | 'pagination';
  color?: string;
  size?: string;
  currentPhotoNumber: number;
  photosLength: number;
  openNextPhotoClick: () => void;
  openPreviousPhotoClick: () => void;
  onSpecificPhotoClick: (index: number) => void;
  resetInterval: () => void;
};

export const Switcher = ({
  switcherType,
  color,
  currentPhotoNumber,
  photosLength,
  size,
  openNextPhotoClick,
  openPreviousPhotoClick,
  // onSpecificPhotoClick,
  resetInterval,
}: SwitcherProps) => {
  if (switcherType === 'pagination') {
    return (
      <Wrapper color={color} size={size}>
        <LeftArrow
          onClick={(e: any) => {
            e.stopPropagation();
            openPreviousPhotoClick();
            resetInterval();
          }}
        />
        {currentPhotoNumber} / {photosLength}
        <RightArrow
          onClick={(e: any) => {
            e.stopPropagation();
            openNextPhotoClick();
            resetInterval();
          }}
        />
      </Wrapper>
    );
  } else {
    return <>yyyyyyy</>;
  }
};
