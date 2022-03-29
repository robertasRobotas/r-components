import React, { useEffect, useState } from 'react';

type SwitcherProps = {
  switcherType: 'circles' | 'pagination';
  currentPhotoNumber: number;
  photosLength: number;
  openNextPhotoClick: () => void;
  openPreviousPhotoClick: () => void;
  onSpecificPhotoClick: () => void;
};

export const Switcher = ({
  switcherType,
  currentPhotoNumber,
  photosLength,
  openNextPhotoClick,
  openPreviousPhotoClick,
  onSpecificPhotoClick,
}: SwitcherProps) => {
  if (switcherType === 'pagination') {
    return <>xxxxxxx</>;
  } else {
    return <>yyyyyyy</>;
  }
};
