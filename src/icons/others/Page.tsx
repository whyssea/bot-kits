import React, { FC } from 'react';

interface IPageIcon {
  color?: string;
}

export const PageIcon: FC<IPageIcon> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4.60219H4C2.89543 4.60219 2 5.49762 2 6.60219V17.2938C2 18.3983 2.89543 19.2938 4 19.2938H20C21.1046 19.2938 22 18.3983 22 17.2938V6.60219C22 5.49762 21.1046 4.60219 20 4.60219Z"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="9.79443"
        y="8.13169"
        width="4.44732"
        height="4.14898"
        transform="rotate(90 9.79443 8.13169)"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linejoin="round"
      />
      <rect
        x="18.0615"
        y="9.43033"
        width="6.33414"
        height="4.29595"
        transform="rotate(90 18.0615 9.43033)"
        stroke={color ? color : 'currentColor'}
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  );
};
