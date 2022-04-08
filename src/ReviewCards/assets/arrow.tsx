import React from 'react';

type SocialSVGType = {
  color: string;
  width?: string;
  height?: string;
};

export const SocialInstagram = ({ color, width, height }: SocialSVGType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36.024"
    height="64.566"
    viewBox="0 0 36.024 64.566"
  >
    <path
      id="Icon_material-keyboard-arrow-left"
      data-name="Icon material-keyboard-arrow-left"
      d="M46.927,68.811,19.453,40.533,48.024,12.255,44.284,8.25,12,40.533,44.284,72.816Z"
      transform="translate(48.024 72.816) rotate(180)"
      fill={color || '#968068'}
    />
  </svg>
);
