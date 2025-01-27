import SocialIcon from '../../social-icon/social-icon';

interface IYoutubeIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function YoutubeIcon({
  width,
  height,
  type,
  onClick,
}: IYoutubeIcon) {
  return (
    <SocialIcon
      type={type}
      width={width}
      height={height}
      color="#FF0000"
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
          d="M29.5576 15.1869C29.4439 14.7635 29.221 14.3773 28.9111 14.067C28.6013 13.7568 28.2154 13.5333 27.792 13.4191C26.2338 13 19.9873 13 19.9873 13C19.9873 13 13.7408 13 12.1825 13.4169C11.759 13.5307 11.3729 13.7541 11.0629 14.0644C10.753 14.3747 10.5302 14.761 10.4169 15.1847C10 16.7452 10 20 10 20C10 20 10 23.2548 10.4169 24.8131C10.6465 25.6736 11.3242 26.3513 12.1825 26.5809C13.7408 27 19.9873 27 19.9873 27C19.9873 27 26.2338 27 27.792 26.5809C28.6525 26.3513 29.328 25.6736 29.5576 24.8131C29.9745 23.2548 29.9745 20 29.9745 20C29.9745 20 29.9745 16.7452 29.5576 15.1869ZM18.0032 22.9873V17.0127L23.1752 19.9777L18.0032 22.9873Z"
          fill="white"
        />
      </svg>
    </SocialIcon>
  );
}

YoutubeIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
