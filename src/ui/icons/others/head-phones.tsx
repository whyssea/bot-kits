import React, { FC } from 'react';

interface IHeadPhonesIcon {
  color?: string;
  width?: number;
  height?: number;
}

const HeadPhonesIcon: FC<IHeadPhonesIcon> = ({
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
    <path
      d="M3 13L3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11V13"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 14.5714C21 14.9503 20.8361 15.3137 20.5444 15.5816C20.2527 15.8495 19.857 16 19.4444 16H18.6667C18.2541 16 17.8584 15.8495 17.5667 15.5816C17.275 15.3137 17.1111 14.9503 17.1111 14.5714V12.4286C17.1111 12.0497 17.275 11.6863 17.5667 11.4184C17.8584 11.1505 18.2541 11 18.6667 11H21V14.5714ZM3 14.5714C3 14.9503 3.16389 15.3137 3.45561 15.5816C3.74733 15.8495 4.143 16 4.55556 16H5.33333C5.74589 16 6.14155 15.8495 6.43328 15.5816C6.725 15.3137 6.88889 14.9503 6.88889 14.5714V12.4286C6.88889 12.0497 6.725 11.6863 6.43328 11.4184C6.14155 11.1505 5.74589 11 5.33333 11H3V14.5714Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 14.5L3 18C3 19.6569 4.34315 21 6 21H11"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="21"
      r="2"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
  </svg>
);

export default HeadPhonesIcon;
