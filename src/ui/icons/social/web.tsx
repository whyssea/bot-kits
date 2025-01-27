import SocialIcon from '../../social-icon/social-icon';

interface IWebIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function WebIcon({ width, height, type, onClick }: IWebIcon) {
  return (
    <SocialIcon
      type={type}
      width={width}
      height={height}
      color="#435CDB"
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
          d="M28.6665 11.3333H11.3332C10.1415 11.3333 9.17734 12.3083 9.17734 13.5L9.1665 26.5C9.1665 27.6916 10.1415 28.6666 11.3332 28.6666H28.6665C29.8582 28.6666 30.8332 27.6916 30.8332 26.5V13.5C30.8332 12.3083 29.8582 11.3333 28.6665 11.3333ZM11.3332 16.75H22.7082V20.5416H11.3332V16.75ZM11.3332 22.7083H22.7082V26.5H11.3332V22.7083ZM28.6665 26.5H24.8748V16.75H28.6665V26.5Z"
          fill="white"
        />
      </svg>
    </SocialIcon>
  );
}

WebIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
