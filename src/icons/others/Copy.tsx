import React, { FC } from 'react';

interface ICopyIcon {
  width?: number;
  height?: number;
  color?: string;
}

export const CopyIcon: FC<ICopyIcon> = ({ width, height, color }) => {
  return (
    <svg
      width={width ? width : '24'}
      height={height ? height : '24'}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 2H8.6C8.2 2 7.8 2.2 7.5 2.5C7.2 2.8 7 3.2 7 3.6V16.4C7 16.8 7.2 17.2 7.5 17.5C7.8 17.8 8.2 18 8.6 18H18.4C18.8 18 19.2 17.8 19.5 17.5C19.8 17.2 20 16.8 20 16.4V6.5L15.5 2Z"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 7.60001V20.4C3 20.8 3.2 21.2 3.5 21.5C3.8 21.8 4.2 22 4.6 22H14.4"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 2V7H20"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
