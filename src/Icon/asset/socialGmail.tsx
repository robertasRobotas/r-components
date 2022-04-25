import React from 'react';

type SocialSVGType = {
  color: string;
  width?: string;
  height?: string;
};

export const SocialGmail = ({ color, width, height }: SocialSVGType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '23.14'}
    height={height || '17.355'}
    viewBox="0 0 23.14 17.355"
  >
    <path
      id="Icon_simple-gmail"
      data-name="Icon simple-gmail"
      d="M23.14,5.946V20.409a1.42,1.42,0,0,1-1.446,1.446H20.247V8.73L11.57,14.961,2.892,8.73V21.855H1.446A1.42,1.42,0,0,1,0,20.409V5.946A1.421,1.421,0,0,1,1.446,4.5h.482l9.642,6.99L21.211,4.5h.482A1.421,1.421,0,0,1,23.14,5.946Z"
      transform="translate(0 -4.5)"
      fill={color}
    />
  </svg>
);
