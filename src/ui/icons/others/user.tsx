import React, { FC } from 'react';

interface IUserIcon {
  color?: string;
  width?: number;
  height?: number;
}

const UserIcon: FC<IUserIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.6668 19.5V17.8333C18.6668 16.9493 18.3156 16.1014 17.6905 15.4763C17.0654 14.8512 16.2176 14.5 15.3335 14.5H8.66683C7.78277 14.5 6.93493 14.8512 6.30981 15.4763C5.68469 16.1014 5.3335 16.9493 5.3335 17.8333V19.5"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9998 11.1667C13.8408 11.1667 15.3332 9.67428 15.3332 7.83333C15.3332 5.99238 13.8408 4.5 11.9998 4.5C10.1589 4.5 8.6665 5.99238 8.6665 7.83333C8.6665 9.67428 10.1589 11.1667 11.9998 11.1667Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserIcon;
