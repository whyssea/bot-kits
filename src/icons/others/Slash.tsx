import React, { FC } from 'react';

interface ISlashIcon {
  color?: string;
}

export const SlashIcon: FC<ISlashIcon> = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1862_332855)">
        <path
          d="M10.0003 18.3337C14.6027 18.3337 18.3337 14.6027 18.3337 10.0003C18.3337 5.39795 14.6027 1.66699 10.0003 1.66699C5.39795 1.66699 1.66699 5.39795 1.66699 10.0003C1.66699 14.6027 5.39795 18.3337 10.0003 18.3337Z"
          stroke={color ? color : 'currentColor'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.1084 4.10834L15.8917 15.8917"
          stroke={color ? color : 'currentColor'}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1862_332855">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
