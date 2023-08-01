import SocialIcon from '../../components/social-icon/SocialIcon';

interface IWhatsappIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function WhatsappIcon({
  width,
  height,
  type,
  onClick,
}: IWhatsappIcon) {
  return (
    <SocialIcon type={type} width={width} height={height} color="#3CBB28" onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="currentColor" />
        <path
          d="M20 30C18.2228 30 16.4896 29.531 14.9652 28.6405L10.3078 29.9121L11.8322 25.7713C11.2825 24.9908 10.8465 24.1407 10.5387 23.2393C10.1796 22.1986 10 21.1103 10 20C10 18.6515 10.2638 17.3397 10.7878 16.1085C11.2898 14.9176 12.0117 13.8476 12.9315 12.9315C13.8512 12.0154 14.9176 11.2935 16.1085 10.7878C17.3397 10.2638 18.6515 10 20 10C21.3485 10 22.6603 10.2638 23.8915 10.7878C25.0824 11.2898 26.1524 12.0117 27.0685 12.9315C27.9846 13.8512 28.7065 14.9176 29.2122 16.1085C29.7325 17.3433 30 18.6515 30 20C30 21.3485 29.7362 22.6603 29.2122 23.8915C28.7101 25.0824 27.9883 26.1524 27.0685 27.0685C26.1488 27.9883 25.0824 28.7065 23.8915 29.2122C22.6603 29.7362 21.3521 30 20 30ZM15.1447 27.358L15.3646 27.4936C16.7534 28.3547 18.3547 28.8091 20 28.8091C24.8589 28.8091 28.8091 24.8589 28.8091 20C28.8091 15.1411 24.8589 11.1909 20 11.1909C15.1411 11.1909 11.1909 15.1447 11.1909 20C11.1909 21.9384 11.8065 23.7743 12.9754 25.317L13.1733 25.5771L12.2243 28.1568L15.1447 27.358Z"
          fill="white"
        />
        <path
          d="M16.5413 14.8298C16.7648 14.7492 17.014 14.7822 17.2192 14.8957C17.3438 14.9654 17.4354 15.0716 17.5343 15.1669C18.04 15.6726 18.542 16.1746 19.0477 16.6803C19.2016 16.8342 19.3005 17.0467 19.2969 17.2666C19.3042 17.4461 19.2419 17.6257 19.1466 17.7759C19.0807 17.8602 19.0147 17.9445 18.9341 18.0141C18.6886 18.2596 18.4431 18.5015 18.2012 18.747C18.2708 18.8972 18.3588 19.0328 18.4394 19.1757C18.5164 19.3223 18.608 19.4579 18.6959 19.5971C19.0037 20.1028 19.3811 20.5645 19.8025 20.9786C20.191 21.3597 20.6197 21.7004 21.0851 21.9826C21.3599 22.1621 21.6457 22.3197 21.9352 22.4736C22.2064 22.1988 22.4812 21.9276 22.7523 21.6565C22.8513 21.5539 22.9722 21.4696 23.1115 21.4256C23.3203 21.345 23.5585 21.3597 23.76 21.4549C23.9176 21.5245 24.0312 21.6565 24.1521 21.7737C24.6505 22.2721 25.1488 22.7704 25.6472 23.2724C25.8011 23.4263 25.889 23.6389 25.8964 23.8587V23.899C25.8927 24.0273 25.8524 24.1519 25.7974 24.2691C25.6912 24.4817 25.4969 24.6246 25.3357 24.7895C25.2624 24.8591 25.1965 24.9434 25.1049 24.9874C24.863 25.1632 24.5955 25.3062 24.3097 25.3941C24.1778 25.4454 24.0349 25.4674 23.8993 25.493C23.7454 25.5223 23.5915 25.5297 23.4376 25.5114C23.2434 25.5114 23.0492 25.4784 22.8586 25.4491C22.6864 25.4271 22.5215 25.3758 22.3529 25.3428C22.188 25.2915 22.0158 25.2512 21.8546 25.1852C21.6457 25.1229 21.4478 25.0277 21.2463 24.947C21.0667 24.8628 20.8872 24.7712 20.7076 24.6795C20.4621 24.5366 20.213 24.4011 19.9784 24.2398C19.689 24.0603 19.4215 23.8441 19.1466 23.6425C18.8462 23.4007 18.553 23.1479 18.2745 22.8767C18.0143 22.6385 17.7762 22.3783 17.5307 22.1255C16.8271 21.3706 16.1565 20.5645 15.6838 19.6411C15.4456 19.1647 15.2588 18.6627 15.1818 18.135C15.1158 17.7613 15.1085 17.3765 15.1488 16.9991C15.1891 16.4934 15.3687 15.995 15.6728 15.5846C15.6985 15.5443 15.7131 15.4967 15.7498 15.4637C15.878 15.3355 16.0026 15.2109 16.1309 15.0826C16.2481 14.9727 16.3837 14.8701 16.5413 14.8298Z"
          fill="white"
        />
        <defs>
          <clipPath id="clip0_473_39009">
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

WhatsappIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
