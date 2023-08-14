import React, { FC } from 'react';

interface IRobotIcon {
  width?: number;
  height?: number;
}

const RobotIcon: FC<IRobotIcon> = ({ width = 32, height = 32 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width="32" height="32" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_4954_52764" transform="scale(0.0138889)" />
      </pattern>
      <image
        id="image0_4954_52764"
        width="72"
        height="72"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default RobotIcon;
