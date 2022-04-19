import React from 'react';

export const Arrow = ({ color = 'black' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="16"
      viewBox="0 0 10.197 19.06"
    >
      <path
        id="Icon_ionic-ios-arrow-back"
        data-name="Icon ionic-ios-arrow-back"
        d="M14.325,15.721l6.749-7.206a1.423,1.423,0,0,0,0-1.924,1.223,1.223,0,0,0-1.805,0l-7.646,8.165a1.428,1.428,0,0,0-.037,1.878l7.678,8.222a1.224,1.224,0,0,0,1.805,0,1.423,1.423,0,0,0,0-1.924Z"
        transform="translate(21.448 25.254) rotate(180)"
        fill={color}
      />
    </svg>
  );
};
