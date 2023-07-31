import { FC } from 'react';

interface IAnsweringMachine {
  size: 'desktop' | 'mobile';
}


export const AnsweringMachine: FC<IAnsweringMachine> = ({size}) => {

  return (

    <svg width={size === 'desktop' ? 88 : 80} height={size === 'desktop' ? 88 : 80} viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M84.6123 44.345C84.6123 48.2227 84.0662 51.973 83.0469 55.5233C82.6024 57.0715 82.0678 58.5817 81.4493 60.0478M26.8137 7.76544C18.4532 11.7233 11.6663 18.4588 7.64634 26.7792M4.37695 36.6267C4.71089 34.8994 5.15478 33.2113 5.70106 31.5699" stroke="white" strokeWidth="1.23684" strokeLinecap="round" />
      <ellipse cx="44" cy="44" rx="44" ry="44" fill="#314DD8" />
      <mask id="mask0_3821_96726" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="-1" width="89" height="89">
        <ellipse cx="44.2371" cy="43.8091" rx="44" ry="44" fill="#314DD8" />
      </mask>
      <g mask="url(#mask0_3821_96726)">
        <path d="M-1.31637 37.081C-1.31612 35.9322 -0.384606 35.0011 0.764225 35.0013L8.00173 35.0029L7.9977 53.6382L0.7602 53.6366C-0.388631 53.6363 -1.31974 52.7048 -1.31949 51.556L-1.31637 37.081Z" fill="#2E293D" />
      </g>
      <ellipse cx="38.7998" cy="42.7061" rx="30.2216" ry="30.2216" fill="#00E98F" />
      <path fillRule="evenodd" clipRule="evenodd" d="M66.0905 63.0844L61.1691 52.3251L61.1833 52.2847L61.2595 52.0865C61.3064 51.9647 61.3526 51.8389 61.3947 51.7138L61.4578 51.5388C61.4979 51.4267 61.5339 51.3153 61.574 51.2031L61.6494 50.9755C61.6854 50.864 61.7213 50.7526 61.7532 50.6419C61.7811 50.5571 61.8048 50.473 61.8286 50.3889C61.8577 50.2871 61.891 50.1845 61.9195 50.0786C61.9459 49.9856 61.9724 49.8926 61.9948 49.8004C62.0178 49.7122 62.0409 49.624 62.0632 49.5317C62.0883 49.4306 62.1168 49.3246 62.1412 49.2194C62.1635 49.1271 62.1866 49.0389 62.2048 48.9473C62.2299 48.8462 62.2509 48.7457 62.2719 48.6452C62.2908 48.5577 62.3098 48.4702 62.328 48.3787C62.3511 48.2652 62.374 48.1518 62.3971 48.0383L62.4362 47.821C62.4613 47.6945 62.4815 47.5647 62.5024 47.4389L62.5315 47.2612C62.5544 47.1225 62.5739 46.9886 62.5928 46.8505L62.6177 46.6735C62.6352 46.5273 62.6527 46.381 62.6708 46.2389L62.6849 46.0974C62.701 45.943 62.7177 45.7927 62.7297 45.6389L62.7397 45.4982C62.7517 45.3444 62.763 45.1866 62.7743 45.0287L62.7829 44.9051C62.7935 44.7431 62.8 44.5819 62.8059 44.4165L62.8111 44.2977C62.8162 44.1282 62.8213 43.9588 62.8224 43.79L62.8222 43.7142C62.8253 43.5325 62.8242 43.3514 62.8191 43.1711L62.8176 43.1123C62.8159 42.9272 62.8107 42.7468 62.8008 42.563L62.7986 42.5002C62.7928 42.3157 62.7835 42.1361 62.7695 41.953L62.7666 41.8861C62.7519 41.6989 62.7413 41.511 62.7225 41.3246L62.721 41.2911C62.7008 41.0964 62.6806 40.9018 62.6604 40.7071L62.6549 40.6743C62.6306 40.4803 62.6056 40.2823 62.5772 40.089L62.5751 40.0767L62.5737 40.0685C62.5439 39.867 62.5135 39.6614 62.4789 39.4565C60.2491 26.2412 47.7302 17.3369 34.5148 19.5667C21.2995 21.7965 12.3952 34.3155 14.625 47.5308C16.8548 60.7462 29.3738 69.6504 42.5891 67.4206C45.5149 66.9269 48.2334 65.9288 50.6607 64.5289C50.7686 64.4685 50.8716 64.4048 50.9794 64.3444L51.1896 64.2163C51.2892 64.1573 51.3881 64.0943 51.4871 64.0312L51.685 63.9051C51.7798 63.8427 51.8753 63.7845 51.9661 63.7228C52.0418 63.6721 52.1175 63.6214 52.1933 63.5707C52.2799 63.5097 52.3706 63.448 52.4573 63.3871L52.6797 63.2315C52.7588 63.176 52.8373 63.1164 52.9198 63.0561C52.9983 62.9966 53.0808 62.9363 53.1593 62.8767C53.2343 62.8219 53.3087 62.763 53.3871 62.7034C53.469 62.639 53.5549 62.5739 53.6368 62.5095L53.8448 62.3438C53.9301 62.2746 54.0187 62.2006 54.104 62.1315C54.1633 62.0835 54.222 62.0315 54.2806 61.9794L54.3066 61.9582L66.0905 63.0844Z" fill="white" />
      <path d="M47.9669 36.09C43.6719 36.1097 40.1101 39.7043 40.1298 43.9879C40.1383 45.8516 40.8687 47.5628 42.0164 48.9854L35.4391 49.0156C36.568 47.5768 37.2826 45.8647 37.2741 44.001C37.2544 39.7175 33.6655 36.1556 29.3647 36.1754C25.0812 36.1951 21.5194 39.7897 21.539 44.0733C21.5588 48.3683 25.1534 51.9301 29.437 51.9104L48.0392 51.825C52.3285 51.8053 55.8845 48.2107 55.8648 43.9156C55.8509 39.6321 52.2562 36.0703 47.9669 36.09ZM29.4238 49.049C26.7058 49.0615 24.413 46.7897 24.4005 44.0659C24.3938 41.3478 26.6655 39.055 29.3779 39.0426C32.1017 39.03 34.3944 41.3018 34.4069 44.0199C34.4252 46.7437 32.1534 49.0365 29.4238 49.049ZM48.0261 48.9636C45.308 48.976 43.0095 46.7043 42.997 43.9805C42.9845 41.2624 45.262 38.9696 47.9801 38.9571C50.6982 38.9446 52.9967 41.2164 53.0091 43.9345C53.0274 46.6583 50.7441 48.9511 48.0261 48.9636Z" fill="#243CBB" />
      <path d="M79.6045 36.0767C79.6048 34.9279 78.6737 33.9964 77.5248 33.9961L70.2873 33.9946L70.2833 52.6299L77.5208 52.6314C78.6696 52.6317 79.6012 51.7006 79.6014 50.5517L79.6045 36.0767Z" fill="#2E293D" />
      <path d="M38.7025 74.3648C21.2633 74.361 7.12907 60.2207 7.13283 42.7815C7.1366 25.3423 21.2769 11.2081 38.7161 11.2118C56.1553 11.2156 70.2895 25.3559 70.2858 42.7951C70.2851 46.0385 69.7954 49.1675 68.8865 52.1125" stroke="#060C23" strokeWidth="4.12281" strokeLinecap="round" />
      <ellipse cx="38.7021" cy="74.3646" rx="4.65914" ry="4.65914" fill="#2E293D" />
      <path d="M44.2354 5.17657C49.958 5.17657 55.3914 6.41472 60.2824 8.63774M64.6824 10.991C66.1391 11.8953 67.5315 12.8933 68.8513 13.9766C69.8324 14.7819 70.7733 15.6344 71.6706 16.5306M76.5788 65.4825C72.5715 71.5037 66.9276 76.3421 60.2824 79.3625" stroke="white" strokeWidth="2.47368" strokeLinecap="round" />
    </svg>
  )
};




