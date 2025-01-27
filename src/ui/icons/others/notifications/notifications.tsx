import React, { FC } from 'react';

import styles from './index.module.css';

interface INotificationsIcon {
  color?: string;
  width?: number;
  height?: number;
  counter?: number;
}

const NotificationsIcon: FC<INotificationsIcon> = ({
  color,
  counter,
  width = 25,
  height = 29,
}) => (
  <div className={styles.notification}>
    {counter && counter > 0 ? (
      <div className={styles.circle}>{counter}</div>
    ) : null}
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g>
        <path
          id="svg_1"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke={color || 'currentColor'}
          d="m19,13c0,-1.5913 -0.6321,-3.11742 -1.7574,-4.24264c-1.1252,-1.12522 -2.6513,-1.75736 -4.2426,-1.75736c-1.5913,0 -3.11742,0.63214 -4.24264,1.75736c-1.12522,1.12522 -1.75736,2.65134 -1.75736,4.24264c0,7 -3,9 -3,9l18,0c0,0 -3,-2 -3,-9z"
        />
        <path
          id="svg_2"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke={color || 'currentColor'}
          d="m13.73,26c-0.1758,0.3031 -0.4281,0.5547 -0.7318,0.7295c-0.3036,0.1749 -0.6478,0.267 -0.9982,0.267c-0.3504,0 -0.6946,-0.0921 -0.9982,-0.267c-0.3036,-0.1748 -0.556,-0.4264 -0.7318,-0.7295"
        />
        <path
          id="svg_4"
          fill="white"
          d="m54.952748,6.811595l-4.84,0l0,-1.22l2.19,-1.92c0.3733,-0.32667 0.6467,-0.62 0.82,-0.88c0.1733,-0.26667 0.26,-0.55333 0.26,-0.86l0,-0.13c0,-0.30667 -0.1,-0.54 -0.3,-0.7c-0.2,-0.16667 -0.4433,-0.25 -0.73,-0.25c-0.36,0 -0.6333,0.10333 -0.82,0.31c-0.1867,0.2 -0.32,0.44333 -0.4,0.73l-1.14,-0.44c0.0733,-0.23333 0.1767,-0.45333 0.31,-0.66c0.1333,-0.21333 0.3,-0.4 0.5,-0.56c0.2067,-0.16 0.4467,-0.28667 0.72,-0.38c0.2733,-0.09333 0.5867,-0.14 0.94,-0.14c0.3667,0 0.6933,0.05333 0.98,0.16c0.2867,0.1 0.5267,0.24333 0.72,0.43c0.2,0.18667 0.35,0.40667 0.45,0.66c0.1067,0.25333 0.16,0.53 0.16,0.83c0,0.29333 -0.0467,0.56 -0.14,0.8c-0.0933,0.24 -0.22,0.47 -0.38,0.69c-0.16,0.21333 -0.3467,0.42 -0.56,0.62c-0.2133,0.19333 -0.44,0.39 -0.68,0.59l-1.47,1.21l3.41,0l0,1.11z"
        />
      </g>
    </svg>
  </div>
);

export default NotificationsIcon;
