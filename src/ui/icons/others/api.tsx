import React, { FC } from 'react';

interface IApiIcon {
  color?: string;
  width?: number;
  height?: number;
}

const ApiIcon: FC<IApiIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 18C22 18.5304 21.7893 19.0391 21.4142 19.4142C21.0391 19.7893 20.5304 20 20 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H6"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 23H16"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.6781 8.99563C21.6781 8.73329 21.6515 8.4797 21.616 8.22611L23 6.95815L21.2966 4.04622L19.4867 4.58838C19.0786 4.27358 18.6172 4.01124 18.1293 3.81012L17.7034 2H14.2966L13.8707 3.81012C13.3828 4.0025 12.9214 4.27358 12.5133 4.58838L10.7034 4.04622L9 6.94941L10.384 8.21736C10.3485 8.47096 10.3219 8.72455 10.3219 8.98688C10.3219 9.24922 10.3485 9.50281 10.384 9.7564L9 11.0418L10.7034 13.9538L12.5133 13.4116C12.9214 13.7264 13.3828 13.9888 13.8707 14.1899L14.2966 16H17.7034L18.1293 14.1899C18.6172 13.9975 19.0786 13.7264 19.4867 13.4116L21.2966 13.9538L23 11.0418L21.616 9.77389C21.6515 9.51155 21.6781 9.25796 21.6781 8.99563Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
    <path
      d="M16 11C17.1046 11 18 10.1046 18 9C18 7.89543 17.1046 7 16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinejoin="round"
    />
  </svg>
);

export default ApiIcon;
