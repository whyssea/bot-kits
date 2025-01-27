import React, { FC } from 'react';

interface IUrlIcon {
  color?: string;
  width?: number;
  height?: number;
}

const UrlIcon: FC<IUrlIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.06236 7C1.06236 7 1 12.152 1 12.9168C1 17.0277 8 17.0277 8 12.9168C8 12.152 7.93764 7 7.93764 7"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 7C19 9.9364 19 12.9152 19 16C20.4038 16 23 16 23 16"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.7595 16L13.5108 12.4408M11 16V7.02221C11.2759 7.01159 12.1726 7.00096 12.5727 7.00096C13.8005 6.97971 14.7386 7.30908 15.387 8.08467C16.1182 8.97714 16.1319 9.9546 15.7595 10.9321C15.4974 11.5908 14.5179 12.3664 13.428 12.3664C12.4899 12.3664 11.9381 12.3239 11 12.292V16Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UrlIcon;
