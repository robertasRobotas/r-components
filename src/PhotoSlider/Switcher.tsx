import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import leftArrow from './assets/leftArrow.svg';
import rightArrow from './assets/rightArrow.svg';

export const Wrapper = styled.div<any>`
  width: 100%;
  height: 100%;
  font-size: ${(props) => (props.size ? props.size : '28px')};
  transform: translateX(-50%);
  color: ${(props) => (props.color ? props.color : 'black')};
  display: flex;
  align-content: center;
`;

export const LeftArrow = styled.img<any>`
  padding-right: 15px;
  cursor: pointer;
`;

export const RightArrow = styled.img<any>`
  padding-left: 15px;
  cursor: pointer;
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
  onSpecificPhotoClick,
  resetInterval,
}: SwitcherProps) => {
  if (switcherType === 'pagination') {
    return (
      <Wrapper color={color} size={size}>
        <LeftArrow
          src={leftArrow}
          onClick={(e: any) => {
            e.stopPropagation();
            openPreviousPhotoClick();
            resetInterval();
          }}
        />
        {currentPhotoNumber} / {photosLength}
        <RightArrow
          src={rightArrow}
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
