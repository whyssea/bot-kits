import React, { FC } from 'react';

interface IDeepLinkIcon {
  color?: string;
  width?: number;
  height?: number;
}

const DeepLinkIcon: FC<IDeepLinkIcon> = ({
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
    <g clipPath="url(#clip0_404_441)">
      <path
        d="M11.75 9H13C14.1046 9 15 9.89543 15 11V20C15 21.1046 14.1046 22 13 22H4C2.89543 22 2 21.1046 2 20V11C2 9.89543 2.89543 9 4 9H5.25"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 15H19.5C20.0304 15 20.5391 14.7893 20.9142 14.4142C21.2893 14.0391 21.5 13.5304 21.5 13V4C21.5 3.46957 21.2893 2.96086 20.9142 2.58579C20.5391 2.21071 20.0304 2 19.5 2H10.5C9.96957 2 9.46086 2.21071 9.08579 2.58579C8.71071 2.96086 8.5 3.46957 8.5 4V5"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 2L10.5 2C9.96957 2 9.46086 2.21071 9.08579 2.58579C8.71071 2.96086 8.5 3.46957 8.5 4L8.5 13C8.5 13.5304 8.71071 14.0391 9.08579 14.4142C9.46086 14.7893 9.96957 15 10.5 15L11.625 15"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_404_441">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DeepLinkIcon;
