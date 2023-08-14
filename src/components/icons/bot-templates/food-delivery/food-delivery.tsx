import { FC } from 'react';

interface IFoodDelivery {
  size: 'desktop' | 'mobile';
}

const FoodDelivery: FC<IFoodDelivery> = ({ size }) => (
  <svg
    width={size === 'desktop' ? 88 : 80}
    height={size === 'desktop' ? 88 : 80}
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse cx="44" cy="44" rx="44" ry="44" fill="#22FFAA" />
    <ellipse
      cx="42.3054"
      cy="41.3204"
      rx="30.2216"
      ry="30.2216"
      fill="#00E98F"
    />
    <mask
      id="mask0_3832_95248"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="89"
      height="88"
    >
      <ellipse cx="44.2361" cy="43.9999" rx="44" ry="44" fill="#314DD8" />
    </mask>
    <g mask="url(#mask0_3832_95248)">
      <path
        d="M15.8111 35.3898H12.497C10.7041 35.3898 9.2644 36.8431 9.2644 38.6224C9.2644 38.7039 9.2644 85.441 9.2644 85.5225C9.2644 87.3018 10.7041 88.7415 12.497 88.7415H15.8247V35.3898H15.8111Z"
        fill="#060C23"
      />
      <path
        d="M34.4328 35.3898H15.0778C13.285 35.3898 11.8452 36.8431 11.8452 38.6224C11.8452 38.7039 11.8452 85.441 11.8452 85.5225C11.8452 87.3018 13.285 88.7551 15.0778 88.7551H34.4328C36.2121 88.7551 37.6654 87.3154 37.6654 85.5225C37.6654 85.441 37.6654 56.0215 37.6654 56.0215C37.6654 56.0215 37.6654 38.7039 37.6654 38.636C37.6654 36.8431 36.2121 35.3898 34.4328 35.3898Z"
        fill="#0C1A45"
      />
      <path
        d="M36.1577 41.5834H13.3528V83.5037H36.1577V41.5834Z"
        fill="#85FFD0"
      />
      <path
        d="M24.7483 87.6683C25.8209 87.6683 26.6905 86.7988 26.6905 85.7261C26.6905 84.6535 25.8209 83.784 24.7483 83.784C23.6757 83.784 22.8062 84.6535 22.8062 85.7261C22.8062 86.7988 23.6757 87.6683 24.7483 87.6683Z"
        fill="#635245"
      />
      <path
        d="M67.8737 15.7341L57.6128 14.7379L52.9378 22.675L49.4298 49.349C49.2725 50.547 50.1637 51.6309 51.4213 51.7458C51.4641 51.7494 51.5069 51.753 51.5497 51.7566L64.2993 52.989C65.56 53.1171 66.7164 52.2363 66.8704 51.0252L70.3785 24.3511L67.8737 15.7341Z"
        fill="#243CBB"
      />
      <path
        d="M56.6218 14.6845L68.8282 15.8666L69.1355 13.5564L56.9291 12.3742L56.6218 14.6845Z"
        fill="#060C23"
      />
      <path
        d="M56.4711 38.5325L49.9842 38.6443L50.3178 20.2376L53.55 16.7668L56.7911 20.2159L56.4711 38.5325Z"
        fill="#E4E9F1"
      />
      <path
        d="M43.7939 16.9212L40.5789 20.4007L40.2452 38.8073L49.9842 38.6441L50.3179 20.2374L53.55 16.7667L43.7939 16.9212Z"
        fill="white"
      />
      <path
        d="M53.4948 16.7706L43.7939 16.9214L43.8442 13.8075L53.5409 13.6439L53.4948 16.7706Z"
        fill="#D7DEEA"
      />
      <path
        d="M53.55 16.7668L43.7938 16.9213L40.5788 20.4008L50.3178 20.2375L53.55 16.7668Z"
        fill="#F2F4F8"
      />
      <path
        d="M45.4134 25.9125C45.4353 25.436 45.6998 25.004 46.1105 24.7375L46.2092 21.8747L33.8997 21.3312C33.5938 21.6924 33.1054 21.9169 32.5474 21.8856C32.0057 21.8562 31.5247 21.5861 31.2545 21.208L29.3811 21.1242L29.1436 27.7702C29.5831 27.9695 29.8822 28.3839 29.8622 28.8441C29.8422 29.3043 29.5162 29.6962 29.0679 29.8593L29.0267 31.0769L45.8548 31.8274L46.0317 27.1401C45.6198 26.8448 45.3896 26.4053 45.4134 25.9125Z"
        fill="#435CDB"
      />
      <path
        d="M45.4086 25.9617C45.4305 25.4851 45.6951 25.0531 46.1058 24.7865L46.2101 21.8747L37.8281 21.5032L37.4574 31.4546L45.8394 31.8261L46.0107 27.1874C45.6313 26.8959 45.3849 26.4545 45.4086 25.9617Z"
        fill="#243CBB"
      />
      <path
        d="M34.0146 26.0692C34.798 26.1595 35.5063 25.5977 35.5966 24.8142C35.687 24.0308 35.1251 23.3225 34.3416 23.2322C33.5582 23.1419 32.8499 23.7038 32.7596 24.4872C32.6693 25.2706 33.2312 25.9789 34.0146 26.0692Z"
        fill="#243CBB"
      />
      <path
        d="M74.3633 29.6237H59.7214V79.3625H74.3633V29.6237Z"
        fill="#060C23"
      />
      <path
        d="M59.7214 29.6237H23.1304V79.3625H59.7214V29.6237Z"
        fill="#2E293D"
      />
      <path
        d="M74.3632 29.6237H67.0422V79.3625H74.3632V29.6237Z"
        fill="#252130"
      />
      <path
        d="M67.0424 72.9922L59.7214 79.3624H74.3497V79.1451L67.0424 72.9922Z"
        fill="#252130"
      />
      <path d="M13.1628 72.7413H25.6722V58.5205H13.1492" fill="#243CBB" />
      <path
        d="M49.0064 72.0487C49.7399 72.0487 50.3375 71.3424 50.3375 70.4731C50.3375 69.6039 49.7399 68.9383 49.0064 68.9383C49.0064 68.9383 41.9028 68.9383 42.0794 68.9383C42.1881 68.9383 49.2238 68.9383 49.2238 68.9383H51.7501C52.4835 68.9383 53.0812 68.232 53.0812 67.3628C53.0812 66.4935 52.4835 65.7872 51.7501 65.7872C51.7501 65.7872 41.8621 65.7736 42.0522 65.7736C42.1609 65.7736 42.3239 65.7736 42.3239 65.7736H43.2067H49.1966H53.054C53.7875 65.7736 54.3851 65.0673 54.3851 64.1981C54.3851 63.3288 53.7875 62.6225 53.054 62.6225C53.054 62.6225 41.8213 62.5953 41.9979 62.5953C42.1066 62.5953 42.2696 62.5953 42.2696 62.5953H43.1524H49.1423H51.6414C52.3749 62.5953 52.9725 61.8891 52.9725 61.0198C52.9725 60.1505 52.3749 59.4442 51.6414 59.4442H49.1151H36.1846L41.5904 54.052C42.1066 53.4408 42.1066 52.4357 41.5904 51.8245C41.0743 51.2133 40.1235 51.3627 39.7025 51.8245L37.149 53.6445L28.9588 59.4171C28.9588 59.4171 27.6413 60.558 27.1523 61.7804H25.6135L25.6407 70.704H27.3289C27.5598 71.193 27.8993 71.5597 28.3611 71.7227C29.5836 72.1166 49.0064 72.0487 49.0064 72.0487Z"
        fill="white"
      />
    </g>
    <path
      d="M30.5559 7.84711C25.2018 9.86747 20.5554 12.9442 16.7642 16.7508M13.4783 20.506C12.4347 21.8663 11.4843 23.2916 10.632 24.771C9.99834 25.8709 9.41896 27.0007 8.89584 28.156"
      stroke="white"
      strokeWidth="2.08014"
      strokeLinecap="round"
    />
    <path
      d="M83.1633 43.642C83.3899 50.8713 81.5972 58.0858 77.9345 64.3998"
      stroke="white"
      strokeWidth="2.08014"
      strokeLinecap="round"
    />
  </svg>
);

export default FoodDelivery;
