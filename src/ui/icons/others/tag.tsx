import React, { FC } from 'react';

interface ITagIcon {
  color?: string;
  width?: number;
  height?: number;
}

const TagIcon: FC<ITagIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.604 3.396V15.396"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.604 21.396C6.39965 21.396 7.16272 21.0799 7.72532 20.5173C8.28793 19.9547 8.604 19.1916 8.604 18.396C8.604 17.6003 8.28793 16.8373 7.72532 16.2747C7.16272 15.7121 6.39965 15.396 5.604 15.396C4.80835 15.396 4.04529 15.7121 3.48268 16.2747C2.92007 16.8373 2.604 17.6003 2.604 18.396C2.604 19.1916 2.92007 19.9547 3.48268 20.5173C4.04529 21.0799 4.80835 21.396 5.604 21.396V21.396Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.604 15.396C5.604 13.009 6.55222 10.7199 8.24004 9.03203C9.92787 7.34421 12.2171 6.396 14.604 6.396C14.8892 6.396 19.2198 6.396 21.3495 6.396"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.604 15.396V21.396"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.604 18.396H14.604"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.604 2.604L21.396 6.396L17.604 10.188"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TagIcon;
