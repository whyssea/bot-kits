import React, { FC } from 'react';

interface ILessIcon {
  color?: string;
  width?: number;
  height?: number;
}

export const LessIcon: FC<ILessIcon> = ({ color, width=24, height=24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.9999 6L6 11.9811L17.9999 17.9999"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
