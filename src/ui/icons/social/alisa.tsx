import SocialIcon from '../../social-icon/social-icon';

interface IAlisaIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function AlisaIcon({
  width,
  height,
  type,
  onClick,
}: IAlisaIcon) {
  switch (type) {
    case 'common':
      return (
        <SocialIcon type={type} width={width} height={height} onClick={onClick}>
          <svg
            width={width}
            height={height}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="40"
              height="40"
              rx="20"
              fill="url(#paint0_linear_473_39010)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 30.3125C25.6954 30.3125 30.3125 25.6954 30.3125 20C30.3125 14.3046 25.6954 9.6875 20 9.6875C14.3046 9.6875 9.6875 14.3046 9.6875 20C9.6875 25.6954 14.3046 30.3125 20 30.3125ZM20.1174 14.5C21.2912 14.5 24.8125 19.5417 24.8125 21.6042C24.8125 23.6667 21.5259 24.125 20.1174 24.125C18.7088 24.125 15.1875 23.6667 15.1875 21.6042C15.1875 19.5417 18.9436 14.5 20.1174 14.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_473_39010"
                x1="20"
                y1="0"
                x2="20"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6326FF" />
                <stop offset="1" stopColor="#B326FF" />
              </linearGradient>
            </defs>
          </svg>
        </SocialIcon>
      );
    default:
      return (
        <SocialIcon type={type} width={width} height={height} onClick={onClick}>
          <svg
            width={width}
            height={height}
            viewBox="0 0 40 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="20" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 30.3125C25.6954 30.3125 30.3125 25.6954 30.3125 20C30.3125 14.3046 25.6954 9.6875 20 9.6875C14.3046 9.6875 9.6875 14.3046 9.6875 20C9.6875 25.6954 14.3046 30.3125 20 30.3125ZM20.1174 14.5C21.2912 14.5 24.8125 19.5417 24.8125 21.6042C24.8125 23.6667 21.5259 24.125 20.1174 24.125C18.7088 24.125 15.1875 23.6667 15.1875 21.6042C15.1875 19.5417 18.9436 14.5 20.1174 14.5Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_473_39010"
                x1="20"
                y1="0"
                x2="20"
                y2="40"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6326FF" />
                <stop offset="1" stopColor="#B326FF" />
              </linearGradient>
            </defs>
          </svg>
        </SocialIcon>
      );
  }
}

AlisaIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
