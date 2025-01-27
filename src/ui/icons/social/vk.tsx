import SocialIcon from '../../social-icon/social-icon';

interface IVKIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function VKIcon({ width, height, type, onClick }: IVKIcon) {
  return (
    <SocialIcon
      type={type}
      width={width}
      height={height}
      color="#2787F5"
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
          d="M31.45 13.948C31.616 13.402 31.45 13 30.655 13H28.03C27.362 13 27.054 13.347 26.887 13.73C26.887 13.73 25.552 16.926 23.661 19.002C23.049 19.604 22.771 19.795 22.437 19.795C22.27 19.795 22.019 19.604 22.019 19.057V13.948C22.019 13.292 21.835 13 21.279 13H17.151C16.734 13 16.483 13.304 16.483 13.593C16.483 14.214 17.429 14.358 17.526 16.106V19.904C17.526 20.737 17.373 20.888 17.039 20.888C16.149 20.888 13.984 17.677 12.699 14.003C12.45 13.288 12.198 13 11.527 13H8.9C8.15 13 8 13.347 8 13.73C8 14.412 8.89 17.8 12.145 22.281C14.315 25.341 17.37 27 20.153 27C21.822 27 22.028 26.632 22.028 25.997V23.684C22.028 22.947 22.186 22.8 22.715 22.8C23.105 22.8 23.772 22.992 25.33 24.467C27.11 26.216 27.403 27 28.405 27H31.03C31.78 27 32.156 26.632 31.94 25.904C31.702 25.18 30.852 24.129 29.725 22.882C29.113 22.172 28.195 21.407 27.916 21.024C27.527 20.533 27.638 20.314 27.916 19.877C27.916 19.877 31.116 15.451 31.449 13.948H31.45Z"
          fill="white"
        />
      </svg>
    </SocialIcon>
  );
}

VKIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
