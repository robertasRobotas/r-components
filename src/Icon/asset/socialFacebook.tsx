import React from 'react';

type SocialSVGType = {
  color: string;
  width?: string;
  height?: string;
};

export const SocialFacebook = ({ color, width, height }: SocialSVGType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || '17.266'}
    height={height || '17.266'}
    viewBox="0 0 17.266 17.266"
  >
    <path
      id="Icon_awesome-facebook-square"
      data-name="Icon awesome-facebook-square"
      d="M15.416,2.25H1.85A1.85,1.85,0,0,0,0,4.1V17.666a1.85,1.85,0,0,0,1.85,1.85H7.14v-5.87H4.712V10.883H7.14V8.777a3.372,3.372,0,0,1,3.61-3.718,14.709,14.709,0,0,1,2.14.187V7.6H11.684a1.382,1.382,0,0,0-1.558,1.493v1.794h2.651l-.424,2.763H10.126v5.87h5.29a1.85,1.85,0,0,0,1.85-1.85V4.1A1.85,1.85,0,0,0,15.416,2.25Z"
      transform="translate(0 -2.25)"
      fill={color}
    />
  </svg>
);
