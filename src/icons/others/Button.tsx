import React, { FC } from 'react';

interface IButtonIcon {
  color?: string;
}

export const ButtonIcon: FC<IButtonIcon> = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.54671 4H20.6592C21.9779 4 23.04 5.32087 23.04 6.69458V17.5709C23.04 18.9446 21.9779 20 20.6592 20H3.54671C2.228 20 0.959961 18.9446 0.959961 17.5709V6.69458C0.959961 5.32087 2.228 4 3.54671 4ZM4.1437 6C3.26455 6 2.87996 6.40061 2.87996 7.3164V16.5C2.87996 17.4158 3.26455 18 4.1437 18H20.0622C20.9414 18 21.12 17.4158 21.12 16.5V7.3164C21.12 6.40061 20.9414 6 20.0622 6H4.1437ZM7.82066 13.9414H7.80558V14.4226H6.69126V8.69638H7.80558V11.1665H7.82066C8.10699 10.7063 8.51402 10.4761 9.04174 10.4761C9.52614 10.4761 9.89933 10.646 10.1613 10.9858C10.4232 11.3255 10.5542 11.79 10.5542 12.3793C10.5542 13.0185 10.4013 13.5317 10.0957 13.919C9.79005 14.3064 9.38146 14.5 8.86997 14.5C8.4072 14.5 8.05748 14.3138 7.82066 13.9414ZM7.78818 12.3454V12.7299C7.78818 12.9725 7.85781 13.1734 7.9971 13.3326C8.1364 13.4918 8.31515 13.5714 8.53337 13.5714C8.79723 13.5714 9.00188 13.4692 9.14736 13.2649C9.29284 13.0606 9.36558 12.771 9.36558 12.3962C9.36558 12.085 9.29902 11.842 9.16596 11.6671C9.03285 11.4922 8.84248 11.4047 8.59485 11.4047C8.36271 11.4047 8.17023 11.4916 8.01741 11.6653C7.86459 11.839 7.78818 12.0657 7.78818 12.3454ZM13.4513 14.3452C13.2858 14.4484 13.0366 14.5 12.7038 14.5C11.9145 14.5 11.5199 14.0611 11.5199 13.1833V11.4047H10.9256V10.5535H11.5199V9.72894L12.6342 9.39282V10.5535H13.4513V11.4047H12.6342V12.9668C12.6342 13.3699 12.7847 13.5714 13.0857 13.5714L13.4513 13.494V14.3452ZM17.76 14.4226H16.6457V12.2946C16.6457 11.7014 16.434 11.4047 16.0107 11.4047C15.8065 11.4047 15.6384 11.4833 15.5064 11.6405C15.3745 11.7977 15.3085 11.9972 15.3085 12.239V14.4226H14.1942V10.5535H15.3085V11.1967H15.3236C15.5975 10.7164 15.9968 10.4761 16.5215 10.4761C17.3472 10.4761 17.76 11.0053 17.76 12.0637V14.4226Z"
        fill={color ? color : 'currentColor'}
      />
    </svg>
  );
};
