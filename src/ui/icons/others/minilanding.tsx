import React, { FC } from 'react';

interface IMinilandingIcon {
  color?: string;
  width?: number;
  height?: number;
}

const MinilandingIcon: FC<IMinilandingIcon> = ({
  color,
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2.89355"
      y="3"
      width="7"
      height="7"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
    <rect
      x="2.89355"
      y="14"
      width="7"
      height="7"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
    <rect
      x="13.8936"
      y="14"
      width="7"
      height="7"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
    <path
      d="M17.3934 2.74905L21.1785 5.49907L19.7327 9.94869H15.0541L13.6084 5.49907L17.3934 2.74905Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
  </svg>
);

export default MinilandingIcon;
