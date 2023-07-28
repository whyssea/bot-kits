import SocialIcon from '../components/social-icon/SocialIcon';

interface IMailruIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function MailruIcon({
  width,
  height,
  type,
  onClick,
}: IMailruIcon) {
  return (
    <SocialIcon type={type} width={width} color="#005FF9" onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="currentColor" />
        <path
          d="M23.0083 20C23.0083 21.6583 21.6583 23.0083 20 23.0083C18.3417 23.0083 16.9917 21.6583 16.9917 20C16.9917 18.3417 18.3417 16.9917 20 16.9917C21.6583 16.9917 23.0083 18.3417 23.0083 20ZM20 10C14.4858 10 10 14.4858 10 20C10 25.5142 14.4858 30 20 30C22.02 30 23.9675 29.3983 25.6333 28.2608L25.6617 28.2408L24.3142 26.675L24.2917 26.6892C23.0122 27.5135 21.5221 27.9513 20 27.95C15.6167 27.95 12.05 24.3833 12.05 20C12.05 15.6167 15.6167 12.05 20 12.05C24.3833 12.05 27.95 15.6167 27.95 20C27.9488 20.5745 27.886 21.1472 27.7625 21.7083C27.5117 22.7408 26.7883 23.0567 26.2458 23.015C25.7008 22.9708 25.0625 22.5817 25.0575 21.6308V20C25.0562 18.659 24.5229 17.3733 23.5748 16.425C22.6266 15.4767 21.341 14.9432 20 14.9417C18.6589 14.943 17.373 15.4763 16.4247 16.4247C15.4763 17.373 14.943 18.6589 14.9417 20C14.943 21.3411 15.4763 22.627 16.4247 23.5753C17.373 24.5237 18.6589 25.057 20 25.0583C20.6665 25.06 21.3267 24.9287 21.942 24.6723C22.5572 24.4159 23.1152 24.0395 23.5833 23.565C23.8792 24.0296 24.2884 24.4114 24.7723 24.6746C25.2563 24.9377 25.7992 25.0735 26.35 25.0692C27.0783 25.0692 27.8 24.8258 28.3808 24.385C28.98 23.9292 29.4275 23.2717 29.675 22.4808C29.7142 22.3525 29.7875 22.0608 29.7875 22.0583L29.7892 22.0475C29.935 21.4142 30 20.7808 30 20C30 14.4858 25.5142 10 20 10"
          fill="white"
        />
        <defs>
          <clipPath id="clip0_473_39014">
            <rect
              width="20"
              height="20"
              fill="white"
              transform="translate(10 10)"
            />
          </clipPath>
        </defs>
      </svg>
    </SocialIcon>
  );
}

MailruIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
