import SocialIcon from '../../social-icon/social-icon';

interface ITelegramIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function TelegramIcon({
  width,
  height,
  type,
  onClick,
}: ITelegramIcon) {
  return (
    <SocialIcon
      type={type}
      width={width}
      height={height}
      color="#2AABEE"
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
          d="M27.6646 12.1104L9.93461 18.9474C8.72461 19.4334 8.73161 20.1084 9.71261 20.4094L14.2646 21.8294L24.7966 15.1844C25.2946 14.8814 25.7496 15.0444 25.3756 15.3764L16.8426 23.0774H16.8406L16.8426 23.0784L16.5286 27.7704C16.9886 27.7704 17.1916 27.5594 17.4496 27.3104L19.6606 25.1604L24.2596 28.5574C25.1076 29.0244 25.7166 28.7844 25.9276 27.7724L28.9466 13.5444C29.2556 12.3054 28.4736 11.7444 27.6646 12.1104Z"
          fill="white"
        />
      </svg>
    </SocialIcon>
  );
}

TelegramIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
