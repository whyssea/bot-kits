import React, { FC } from 'react';

interface ICloudIcon {
  color?: string;
  width?: number;
  height?: number;
}

const CloudIcon: FC<ICloudIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.4999 19C18.6934 19 19.838 18.5259 20.6819 17.682C21.5258 16.8381 21.9999 15.6935 21.9999 14.5C21.9999 13.3065 21.5258 12.1619 20.6819 11.318C19.838 10.4741 18.6934 10 17.4999 10H15.6999C15.3289 8.75557 14.619 7.63887 13.6497 6.77477C12.6804 5.91067 11.4898 5.33324 10.2111 5.10703C8.93239 4.88082 7.61596 5.01476 6.40902 5.49387C5.20208 5.97298 4.15219 6.77837 3.37676 7.81999C2.60134 8.86161 2.13093 10.0984 2.01815 11.392C1.90537 12.6857 2.15466 13.9852 2.73814 15.1453C3.32163 16.3054 4.2163 17.2803 5.32213 17.9611C6.42796 18.6418 7.70135 19.0015 8.9999 19H17.4999Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloudIcon;
