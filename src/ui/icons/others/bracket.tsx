import React, { FC } from 'react';

interface IBracketIcon {
  color?: string;
  width?: number;
  height?: number;
}

const BracketIcon: FC<IBracketIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.44439 4H5.77772C5.02217 4 4.44439 4.57778 4.44439 5.33333V9.77778L2.22217 12L4.44439 14.2222V18.6667C4.44439 19.4222 5.02217 20 5.77772 20H8.44439"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M15.5557 20H18.2223C18.9779 20 19.5557 19.4222 19.5557 18.6667V14.2222L21.7779 12L19.5557 9.77778V5.33333C19.5557 4.57778 18.9779 4 18.2223 4H15.5557"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

export default BracketIcon;
