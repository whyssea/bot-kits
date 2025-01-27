import React, { FC } from 'react';

interface IRadioButtonOnIcon {
  circleColor?: string;
  color?: string;
  width?: number;
  height?: number;
}

const RadioButtonOnIcon: FC<IRadioButtonOnIcon> = ({
  color,
  circleColor,
  width = 20,
  height = 20,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_386_32751)">
      <path
        d="M9.99984 18.3334C14.6022 18.3334 18.3332 14.6024 18.3332 10C18.3332 5.39765 14.6022 1.66669 9.99984 1.66669C5.39746 1.66669 1.6665 5.39765 1.6665 10C1.6665 14.6024 5.39746 18.3334 9.99984 18.3334Z"
        stroke={color || 'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
        fill={circleColor || 'currentColor'}
      />
    </g>
    <defs>
      <clipPath id="clip0_386_32751">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default RadioButtonOnIcon;
