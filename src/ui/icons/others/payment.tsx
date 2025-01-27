import React, { FC } from 'react';

interface IPaymentIcon {
  color?: string;
  width?: number;
  height?: number;
}

const PaymentIcon: FC<IPaymentIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 4H3C1.89543 4 1 4.89543 1 6V18C1 19.1046 1.89543 20 3 20H21C22.1046 20 23 19.1046 23 18V6C23 4.89543 22.1046 4 21 4Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 10H23"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="4"
      y1="16"
      x2="9"
      y2="16"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
  </svg>
);

export default PaymentIcon;
