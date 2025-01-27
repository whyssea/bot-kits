import SocialIcon from '../../social-icon/social-icon';

interface IOdnoklassnikiIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function OdnoklassnikiIcon({
  width,
  height,
  type,
  onClick,
}: IOdnoklassnikiIcon) {
  return (
    <SocialIcon
      type={type}
      width={width}
      height={height}
      color="#EE8208"
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
          d="M19.9996 10C22.9035 10 25.2657 12.3154 25.2657 15.1619C25.2657 18.0081 22.9035 20.3225 19.9996 20.3225C17.0958 20.3225 14.7347 18.0081 14.7347 15.1619C14.7347 12.3154 17.0958 10 19.9996 10ZM19.9996 13.0244C18.7978 13.0244 17.8205 13.9837 17.8205 15.1619C17.8205 16.3395 18.7978 17.2981 19.9996 17.2981C21.2017 17.2981 22.18 16.3396 22.18 15.1619C22.18 13.9837 21.2017 13.0244 19.9996 13.0244ZM24.3413 20.4981C24.8623 20.4902 25.3746 20.7419 25.6719 21.2062C26.1261 21.9136 25.9085 22.847 25.1886 23.2919C24.2364 23.8775 23.2031 24.293 22.1315 24.5325L25.0745 27.4187C25.6769 28.0096 25.6764 28.9666 25.0738 29.5575C24.7718 29.8524 24.3779 30 23.983 30C23.5885 30 23.1932 29.8522 22.8921 29.5569L20.0009 26.7213L17.107 29.5569C16.5051 30.1476 15.529 30.1476 14.926 29.5569C14.3233 28.9664 14.3233 28.0084 14.926 27.4188L17.8702 24.5331C16.7983 24.2936 15.7647 23.8779 14.8131 23.2919C14.0918 22.847 13.8739 21.9126 14.328 21.2063C14.7825 20.4988 15.7343 20.2856 16.4561 20.7313C18.612 22.0606 21.3898 22.0598 23.545 20.7313C23.7931 20.5781 24.0684 20.5023 24.3413 20.4981V20.4981Z"
          fill="white"
        />
        <defs>
          <clipPath id="clip0_473_39015">
            <rect
              width="11.8182"
              height="20"
              fill="white"
              transform="matrix(-1 0 0 1 25.9092 10)"
            />
          </clipPath>
        </defs>
      </svg>
    </SocialIcon>
  );
}

OdnoklassnikiIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
