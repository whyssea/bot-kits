import SocialIcon from '../../social-icon/social-icon';

interface IGoogleIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function GoogleIcon({
  width,
  height,
  type,
  onClick,
}: IGoogleIcon) {
  switch (type) {
    case 'common':
      return (
        <SocialIcon
          type={type}
          width={width}
          height={height}
          color="#2D88FF"
          onClick={onClick}
        >
          <svg
            width={width}
            height={height}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="20" fill="#F8F9FB" />
            <g clipPath="url(#clip0_473_39012)">
              <path
                d="M27.545 18.558C27.6383 19.0949 27.6848 19.639 27.684 20.184C27.684 22.618 26.814 24.676 25.3 26.069H25.302C23.978 27.292 22.158 28 20 28C17.8783 28 15.8434 27.1571 14.3431 25.6568C12.8429 24.1565 12 22.1217 12 20C12 17.8782 12.8429 15.8434 14.3431 14.3431C15.8434 12.8428 17.8783 12 20 12C21.9859 11.9767 23.9038 12.7228 25.352 14.082L23.068 16.366C22.2424 15.579 21.1405 15.148 20 15.166C17.913 15.166 16.14 16.574 15.508 18.47C15.1729 19.4635 15.1729 20.5395 15.508 21.533H15.511C16.146 23.426 17.916 24.834 20.003 24.834C21.081 24.834 22.007 24.558 22.725 24.07H22.722C23.1389 23.7938 23.4955 23.436 23.7704 23.0182C24.0452 22.6003 24.2325 22.1312 24.321 21.639H20V18.559H27.545V18.558Z"
                fill="white"
              />
            </g>
            <g clipPath="url(#clip1_473_39012)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.6444 20.1778C27.6444 19.6444 27.5556 19.0222 27.4667 18.5778H20V21.6889H24.2667C24.0889 22.6666 23.5556 23.4666 22.6667 24.0889V26.1333H25.3333C26.8444 24.7111 27.6444 22.5778 27.6444 20.1778Z"
                fill="#4285F4"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9998 28.0001C22.1331 28.0001 23.9998 27.289 25.3331 26.0445L22.6664 24.089C21.9553 24.5334 21.0664 24.889 19.9998 24.889C17.9553 24.889 16.1776 23.4668 15.5553 21.6001H12.8887V23.5557C14.1331 26.2223 16.8887 28.0001 19.9998 28.0001Z"
                fill="#34A853"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5556 21.5111C15.3778 21.0666 15.2889 20.5333 15.2889 20C15.2889 19.4666 15.3778 18.9333 15.5556 18.4888V16.4444H12.8889C12.3556 17.5111 12 18.7555 12 20C12 21.2444 12.2667 22.4888 12.8889 23.5555L15.5556 21.5111Z"
                fill="#FBBC05"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9998 15.2C21.1553 15.2 22.222 15.6444 23.022 16.3556L25.3331 14.0444C23.9998 12.8 22.1331 12 19.9998 12C16.8887 12 14.1331 13.7778 12.8887 16.4444L15.5553 18.4889C16.1776 16.6222 17.9553 15.2 19.9998 15.2Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_473_39012">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(12 12)"
                />
              </clipPath>
              <clipPath id="clip1_473_39012">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(12 12)"
                />
              </clipPath>
            </defs>
          </svg>
        </SocialIcon>
      );
    default:
      return (
        <SocialIcon
          type={type}
          width={width}
          height={height}
          color="#2D88FF"
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
            <g clipPath="url(#clip0_473_39012)">
              <path
                d="M27.545 18.558C27.6383 19.0949 27.6848 19.639 27.684 20.184C27.684 22.618 26.814 24.676 25.3 26.069H25.302C23.978 27.292 22.158 28 20 28C17.8783 28 15.8434 27.1571 14.3431 25.6568C12.8429 24.1565 12 22.1217 12 20C12 17.8782 12.8429 15.8434 14.3431 14.3431C15.8434 12.8428 17.8783 12 20 12C21.9859 11.9767 23.9038 12.7228 25.352 14.082L23.068 16.366C22.2424 15.579 21.1405 15.148 20 15.166C17.913 15.166 16.14 16.574 15.508 18.47C15.1729 19.4635 15.1729 20.5395 15.508 21.533H15.511C16.146 23.426 17.916 24.834 20.003 24.834C21.081 24.834 22.007 24.558 22.725 24.07H22.722C23.1389 23.7938 23.4955 23.436 23.7704 23.0182C24.0452 22.6003 24.2325 22.1312 24.321 21.639H20V18.559H27.545V18.558Z"
                fill="white"
              />
            </g>
            <g clipPath="url(#clip1_473_39012)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.6444 20.1778C27.6444 19.6444 27.5556 19.0222 27.4667 18.5778H20V21.6889H24.2667C24.0889 22.6666 23.5556 23.4666 22.6667 24.0889V26.1333H25.3333C26.8444 24.7111 27.6444 22.5778 27.6444 20.1778Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9998 28.0001C22.1331 28.0001 23.9998 27.289 25.3331 26.0445L22.6664 24.089C21.9553 24.5334 21.0664 24.889 19.9998 24.889C17.9553 24.889 16.1776 23.4668 15.5553 21.6001H12.8887V23.5557C14.1331 26.2223 16.8887 28.0001 19.9998 28.0001Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5556 21.5111C15.3778 21.0666 15.2889 20.5333 15.2889 20C15.2889 19.4666 15.3778 18.9333 15.5556 18.4888V16.4444H12.8889C12.3556 17.5111 12 18.7555 12 20C12 21.2444 12.2667 22.4888 12.8889 23.5555L15.5556 21.5111Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.9998 15.2C21.1553 15.2 22.222 15.6444 23.022 16.3556L25.3331 14.0444C23.9998 12.8 22.1331 12 19.9998 12C16.8887 12 14.1331 13.7778 12.8887 16.4444L15.5553 18.4889C16.1776 16.6222 17.9553 15.2 19.9998 15.2Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_473_39012">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(12 12)"
                />
              </clipPath>
              <clipPath id="clip1_473_39012">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(12 12)"
                />
              </clipPath>
            </defs>
          </svg>
        </SocialIcon>
      );
  }
}

GoogleIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
