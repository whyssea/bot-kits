import React, { FC } from 'react';

interface IMessageSquareIcon {
  color?: string;
  width?: number;
  height?: number;
}

const MessageSquareIcon: FC<IMessageSquareIcon> = ({
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
      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="7"
      y1="10"
      x2="9"
      y2="10"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
    <line
      x1="11"
      y1="10"
      x2="13"
      y2="10"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
    <line
      x1="15"
      y1="10"
      x2="17"
      y2="10"
      stroke={color || 'currentColor'}
      strokeWidth="2"
    />
  </svg>
);

export default MessageSquareIcon;
