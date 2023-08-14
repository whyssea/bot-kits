import SocialIcon from '../../components/social-icon/social-icon';

interface ITwitterIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function TwitterIcon({
  width,
  height,
  type,
  onClick,
}: ITwitterIcon) {
  return (
    <SocialIcon
      type={type}
      width={width}
      height={height}
      color="#1DA1F2"
      onClick={onClick}
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="currentColor" />
        <path
          d="M29.7024 14.1141C29.0066 14.4225 28.2591 14.6308 27.4733 14.725C28.2841 14.2398 28.8907 13.4762 29.1799 12.5766C28.4181 13.0291 27.5844 13.3476 26.7149 13.5183C26.1302 12.894 25.3558 12.4803 24.5119 12.3412C23.6679 12.2022 22.8017 12.3456 22.0476 12.7494C21.2936 13.1531 20.6939 13.7945 20.3417 14.5739C19.9895 15.3534 19.9045 16.2273 20.0999 17.06C18.5563 16.9825 17.0463 16.5813 15.6678 15.8824C14.2893 15.1835 13.0731 14.2026 12.0983 13.0033C11.7649 13.5783 11.5733 14.245 11.5733 14.955C11.5729 15.5941 11.7303 16.2235 12.0315 16.7873C12.3327 17.351 12.7684 17.8317 13.2999 18.1866C12.6835 18.167 12.0807 18.0005 11.5416 17.7008V17.7508C11.5415 18.6473 11.8516 19.5161 12.4192 20.21C12.9869 20.9038 13.7771 21.3799 14.6558 21.5575C14.0839 21.7122 13.4844 21.735 12.9024 21.6242C13.1503 22.3955 13.6333 23.07 14.2836 23.5533C14.9339 24.0365 15.719 24.3043 16.5291 24.3192C15.154 25.3987 13.4557 25.9842 11.7074 25.9816C11.3977 25.9817 11.0883 25.9636 10.7808 25.9275C12.5553 27.0685 14.621 27.674 16.7308 27.6716C23.8724 27.6716 27.7766 21.7566 27.7766 16.6266C27.7766 16.46 27.7724 16.2916 27.7649 16.125C28.5243 15.5758 29.1799 14.8957 29.7008 14.1166L29.7024 14.1141Z"
          fill="white"
        />
      </svg>
    </SocialIcon>
  );
}

TwitterIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};