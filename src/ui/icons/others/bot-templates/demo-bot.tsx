import { FC } from 'react';

interface IDemoBot {
  size: 'desktop' | 'mobile';
}

const DemoBot: FC<IDemoBot> = ({ size }) => (
  <svg
    width={size === 'desktop' ? 88 : 80}
    height={size === 'desktop' ? 88 : 80}
    viewBox="0 0 88 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3832_87678)">
      <ellipse cx="44" cy="44" rx="44" ry="44" fill="#060C23" />
      <mask
        id="mask0_3832_87678"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="88"
        height="88"
      >
        <ellipse cx="44" cy="43.9999" rx="44" ry="44" fill="#243CBB" />
      </mask>
      <g mask="url(#mask0_3832_87678)">
        <circle cx="44.2352" cy="32.0941" r="30.0235" fill="#2E293D" />
        <path
          d="M44.9281 12.312C47.8706 12.5258 50.543 13.7548 52.5929 15.6487L53.5091 14.7225L51.9292 13.1254L53.9966 11.0356C54.073 10.9584 54.2081 10.9584 54.2844 11.0356L57.9612 14.7522C58.0375 14.8294 58.0375 14.9659 57.9612 15.0431L55.8879 17.133L54.3079 15.5359L53.3917 16.4621C55.465 18.7479 56.7278 21.7995 56.7278 25.1421C56.7278 28.6925 55.3005 31.9104 52.9981 34.2377C50.6958 36.5651 47.5124 38.0078 44.0001 38.0078C40.4878 38.0078 37.3044 36.5651 35.002 34.2377C32.6996 31.9104 31.2724 28.6925 31.2724 25.1421C31.2724 21.7936 32.5351 18.7479 34.6085 16.4621L33.6922 15.5359L32.1123 17.133L30.0448 15.0431C29.9685 14.9659 29.9685 14.8294 30.0448 14.7522L33.7216 11.0356C33.7979 10.9584 33.933 10.9584 34.0094 11.0356L36.0768 13.1254L34.4969 14.7225L35.4131 15.6487C37.4629 13.7488 40.1295 12.5258 43.0779 12.312V9.60473H39.4247V4.77787C39.4247 4.59382 39.5774 4.43945 39.7594 4.43945H48.2583C48.4404 4.43945 48.5931 4.59382 48.5931 4.77787V9.60473H44.9398V12.312H44.9281ZM51.8235 17.2398C49.8206 15.2153 47.0542 13.9626 44.0001 13.9626C40.9459 13.9626 38.1795 15.2153 36.1767 17.2398C34.1738 19.2644 32.9345 22.0608 32.9345 25.148C32.9345 28.2353 34.1738 31.0317 36.1767 33.0563C38.1795 35.0808 40.9459 36.3335 44.0001 36.3335C47.0542 36.3335 49.8206 35.0808 51.8235 33.0563C53.8263 31.0317 55.0656 28.2353 55.0656 25.148C55.0597 22.0548 53.8204 19.2644 51.8235 17.2398Z"
          fill="#22FFAA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.9878 25.1427H53.5093C53.4916 19.8405 49.239 15.5417 43.9878 15.5358V25.1427Z"
          fill="#22FFAA"
          stroke="#22FFAA"
          strokeWidth="0.196539"
          strokeMiterlimit="22.9256"
        />
        <path
          d="M77.7142 74.1042C77.7142 74.3259 77.7108 74.5476 77.7029 74.7682C77.7029 74.7693 77.7029 74.7693 77.7029 74.7693C77.6859 75.2893 77.6497 75.8048 77.592 76.3146C76.1372 83.4063 61.7617 88.974 44.2424 88.974C26.7242 88.974 12.3488 83.4063 10.8939 76.3146C10.8362 75.8048 10.8 75.2893 10.783 74.7693C10.783 74.7693 10.783 74.7693 10.783 74.7682C10.7751 74.5476 10.7717 74.3259 10.7717 74.1042C10.7717 64.0728 14.8388 55.3571 21.3483 49.3099C21.3505 49.3076 21.3517 49.3065 21.3539 49.3042C27.3396 43.7466 35.39 40.4422 44.2424 40.4422C53.096 40.4422 61.1452 43.7466 67.1309 49.3042C67.1331 49.3065 67.1354 49.3076 67.1365 49.3099C73.6472 55.3571 77.7142 64.0728 77.7142 74.1042Z"
          fill="#F2F4F8"
        />
        <path
          d="M44.3699 41.1227C46.2056 41.1227 47.6937 39.6397 47.6937 37.8104C47.6937 35.981 46.2056 34.498 44.3699 34.498C42.5342 34.498 41.0461 35.981 41.0461 37.8104C41.0461 39.6397 42.5342 41.1227 44.3699 41.1227Z"
          fill="#22FFAA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.2345 39.3035C44.883 39.3035 45.4087 39.7498 45.4087 40.3002V47.7005C45.4087 48.2509 44.883 48.6972 44.2345 48.6972C43.586 48.6972 43.0603 48.2509 43.0603 47.7005V40.3002C43.0603 39.7498 43.586 39.3035 44.2345 39.3035Z"
          fill="#060C23"
        />
        <path
          d="M44.2351 38.3324C44.8839 38.3324 45.4099 37.8064 45.4099 37.1576C45.4099 36.5088 44.8839 35.9828 44.2351 35.9828C43.5863 35.9828 43.0603 36.5088 43.0603 37.1576C43.0603 37.8064 43.5863 38.3324 44.2351 38.3324Z"
          fill="white"
        />
        <path
          d="M44.2424 83.5976C30.8772 83.5976 18.313 79.0878 16.4373 70.8133C15.4327 66.3811 16.6092 60.4521 18.2745 57.0723C24.2308 44.9801 36.4375 42.3465 44.2424 42.3465C52.0472 42.3465 64.2539 44.9812 70.2102 57.0723C71.8755 60.4521 73.0509 66.3822 72.0475 70.8133C70.1718 79.0878 57.6076 83.5976 44.2424 83.5976Z"
          fill="#435CDB"
        />
        <path
          d="M44.2427 81.9163C31.9681 81.9163 20.4277 77.7745 18.7048 70.1741C17.7827 66.1033 18.8631 60.6571 20.3915 57.553C25.8625 46.4468 37.0737 44.027 44.2416 44.027C51.4095 44.027 62.6219 46.4468 68.0917 57.553C69.6212 60.6571 70.7016 66.1033 69.7785 70.1741C68.0578 77.7745 56.5185 81.9163 44.2427 81.9163Z"
          fill="#060C23"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.4529 68.5485C30.6036 67.6992 29.0756 67.6992 28.2263 68.5485C27.9015 68.8732 27.375 68.8732 27.0502 68.5485C26.7254 68.2237 26.7255 67.6972 27.0502 67.3724C28.549 65.8736 31.1301 65.8736 32.6289 67.3724C32.9537 67.6972 32.9537 68.2237 32.629 68.5485C32.3042 68.8732 31.7776 68.8732 31.4529 68.5485Z"
          fill="#22FFAA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M59.0449 68.5485C58.1956 67.6992 56.6676 67.6992 55.8183 68.5485C55.4936 68.8732 54.967 68.8732 54.6423 68.5485C54.3175 68.2237 54.3175 67.6971 54.6423 67.3724C56.1411 65.8736 58.7222 65.8736 60.221 67.3724C60.5458 67.6971 60.5458 68.2237 60.221 68.5485C59.8962 68.8732 59.3697 68.8732 59.0449 68.5485Z"
          fill="#22FFAA"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M74.27 67.2955C74.7918 67.1467 75.3359 67.4476 75.4852 67.9675C75.8795 69.3405 75.9489 71.256 75.7631 73.0153C75.6691 73.9059 75.5065 74.7889 75.2712 75.5758C75.0398 76.3493 74.7195 77.0938 74.2752 77.6563C73.9395 78.0813 73.3217 78.1547 72.8952 77.8202C72.4688 77.4857 72.3951 76.87 72.7308 76.445C72.9581 76.1572 73.1901 75.677 73.3877 75.0163C73.5813 74.3691 73.7243 73.6084 73.8086 72.8104C73.9793 71.1927 73.8959 69.5517 73.5957 68.5064C73.4463 67.9865 73.7483 67.4443 74.27 67.2955Z"
          fill="white"
        />
        <path
          d="M71.135 80.8966C71.6957 80.8966 72.1503 80.4443 72.1503 79.8865C72.1503 79.3286 71.6957 78.8763 71.135 78.8763C70.5742 78.8763 70.1196 79.3286 70.1196 79.8865C70.1196 80.4443 70.5742 80.8966 71.135 80.8966Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.3943 73.1031C39.8639 72.6343 40.6259 72.6337 41.0963 73.1017C42.8323 74.8288 45.6491 74.8288 47.3852 73.1017C47.8556 72.6337 48.6176 72.6343 49.0872 73.1031C49.5568 73.5719 49.5562 74.3313 49.0858 74.7993C46.41 77.4612 42.0714 77.4612 39.3957 74.7993C38.9253 74.3313 38.9247 73.5719 39.3943 73.1031Z"
          fill="#22FFAA"
        />
        <path
          d="M28.5586 74.6697V73.9431C28.5586 73.8292 28.6505 73.7378 28.7649 73.7378H29.4953C29.6098 73.7378 29.7016 73.8292 29.7016 73.9431V74.6697C29.7016 74.7836 29.6098 74.875 29.4953 74.875H28.7649C28.652 74.875 28.5586 74.7836 28.5586 74.6697Z"
          fill="#FF5555"
        />
        <path
          d="M26.9729 74.6703V73.9436C26.9729 73.8297 27.0648 73.7383 27.1792 73.7383H27.9096C28.0241 73.7383 28.116 73.8297 28.116 73.9436V74.6703C28.116 74.7841 28.0241 74.8755 27.9096 74.8755H27.1792C27.0648 74.8755 26.9729 74.7841 26.9729 74.6703Z"
          fill="#FF5555"
        />
        <path
          d="M61.0938 74.6697V73.9431C61.0938 73.8292 61.1856 73.7378 61.3001 73.7378H62.0305C62.145 73.7378 62.2368 73.8292 62.2368 73.9431V74.6697C62.2368 74.7836 62.145 74.875 62.0305 74.875H61.3001C61.1856 74.875 61.0938 74.7836 61.0938 74.6697Z"
          fill="#FF5555"
        />
        <path
          d="M59.5288 74.6703V73.9436C59.5288 73.8297 59.6207 73.7383 59.7351 73.7383H60.4655C60.58 73.7383 60.6719 73.8297 60.6719 73.9436V74.6703C60.6719 74.7841 60.58 74.8755 60.4655 74.8755H59.7351C59.6222 74.8755 59.5288 74.7841 59.5288 74.6703Z"
          fill="#FF5555"
        />
      </g>
      <path
        d="M44.2354 36.9098V24.3295"
        stroke="white"
        strokeWidth="0.693381"
      />
      <ellipse
        cx="3.10609"
        cy="3.1061"
        rx="3.10609"
        ry="3.1061"
        transform="matrix(1 0 0 -1 41.1294 28.248)"
        fill="white"
      />
      <path
        d="M7.86768 29.4158C5.88577 34.7842 5.16554 40.3102 5.5571 45.6684M6.24093 50.6112C6.58472 52.2909 7.03871 53.9427 7.59791 55.556C8.01364 56.7553 8.48751 57.9333 9.01749 59.0854"
        stroke="white"
        strokeWidth="2.08014"
        strokeLinecap="round"
      />
      <path
        d="M81.5272 29.5527C84.2385 36.2581 85.0499 43.6476 83.7953 50.8384"
        stroke="white"
        strokeWidth="2.08014"
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3832_87678">
        <rect width="88" height="88" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DemoBot;