import React, { FC } from 'react';

interface IUpIcon {
  color?: string;
  width?: number;
  height?: number;
}

export const UpIcon: FC<IUpIcon> = ({ color, width=20, height=20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 12.5L10 7.5L5 12.5"
        stroke={color ? color : 'currentColor'}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
