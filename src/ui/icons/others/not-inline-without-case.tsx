import React, { FC } from 'react';

interface INotInLineWithoutCaseIcon {
  color?: string;
  width?: number;
  height?: number;
}

const NotInLineWithoutCaseIcon: FC<INotInLineWithoutCaseIcon> = ({
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
      d="M5.55664 2.47568L2.55664 5.47568L5.55664 8.37568"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M18.4434 2.47568L21.4434 5.47568L18.4434 8.37568"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M4.94336 5.47568H7.94336"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M16.1597 5.47568L19.1597 5.47568"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M11.1191 5.47568H12.8813"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M2.55664 13.2442H8.46085"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
    <path
      d="M12 14.2184V12.1823H19.7329V14.2184"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M18.5166 16.6849H23.5423"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M15.8662 12.1823V21.5743"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M21.0293 16.6849V21.5743"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

export default NotInLineWithoutCaseIcon;
