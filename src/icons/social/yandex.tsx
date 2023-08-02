import SocialIcon from '../../components/social-icon/SocialIcon';

interface IYandexIcon {
  width?: number;
  height?: number;
  type: 'blue' | 'common' | 'disabled';
  onClick?: VoidFunction;
}

export default function YandexIcon({
  width,
  height,
  type,
  onClick,
}: IYandexIcon) {
  return (
    <SocialIcon type={type} width={width} height={height} color="#FC3F1D" onClick={onClick}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 40"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="20" fill="currentColor" />
        <path
          d="M23.3078 12.125H21.0578C18.8078 12.125 16.5184 13.8125 16.5184 17.5363C16.4714 18.3994 16.664 19.2587 17.075 20.0191C17.486 20.7796 18.0994 21.4115 18.8472 21.845L16.0628 26.8231C15.999 26.9313 15.9653 27.0547 15.9653 27.1803C15.9653 27.3059 15.999 27.4293 16.0628 27.5375C16.1205 27.6366 16.2024 27.7195 16.3007 27.7785C16.3991 27.8375 16.5107 27.8707 16.6253 27.875H18.0259C18.1681 27.8819 18.3089 27.8452 18.4295 27.7698C18.5502 27.6944 18.6449 27.5839 18.7009 27.4531L21.2828 22.3906H21.4741V27.2394C21.4747 27.326 21.4929 27.4117 21.5276 27.4911C21.5622 27.5705 21.6126 27.6421 21.6757 27.7015C21.7388 27.7609 21.8132 27.8069 21.8946 27.8367C21.976 27.8665 22.0625 27.8796 22.1491 27.875H23.3753C23.5406 27.8811 23.7016 27.8221 23.8237 27.7105C23.9457 27.599 24.0191 27.4439 24.0278 27.2788V12.8113C24.0301 12.7233 24.015 12.6358 23.9834 12.5538C23.9518 12.4717 23.9044 12.3967 23.8438 12.3329C23.7832 12.2692 23.7106 12.218 23.6302 12.1824C23.5498 12.1467 23.4632 12.1272 23.3753 12.125H23.3078ZM21.5191 20.1575H21.1872C19.8934 20.1575 19.1284 19.1056 19.1284 17.345C19.1284 15.1512 20.1016 14.3694 21.0072 14.3694H21.5359L21.5191 20.1575Z"
          fill="white"
        />
      </svg>
    </SocialIcon>
  );
}

YandexIcon.defaultProps = {
  width: 40,
  height: 40,
  onClick: () => {},
};
