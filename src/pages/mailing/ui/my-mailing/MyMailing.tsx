/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router';

import styles from './index.module.css';

import ChevronBigIcon from '../../../../icons/others/ChevronBig';
import TutorialButton from '../../../../components/tutorial-button/TutorialButton';
import Button from '../../../../components/Button/Button';
import IconWithPercents from '../icon-with-percents/IconWithPercents';

interface IData {
  id: number;
  name: string;
  messenger:
    | 'Telegram'
    | 'VK'
    | 'Viber'
    | 'Whatsapp'
    | 'Alisa'
    | 'Google'
    | 'Facebook'
    | 'Youtube'
    | 'Instagram'
    | 'Twitter'
    | 'Web'
    | 'Odnoklassniki'
    | 'Mailru'
    | 'Yandex';
  messages: string;
  conversion: string;
  status: string;
}

const data: IData[] = [
  {
    id: 22496346,
    name: '№1',
    messenger: 'Telegram',
    messages: '8 сообщений',
    conversion: '60%',
    status: 'Запущено',
  },
  {
    id: 32284427,
    name: '№2',
    messenger: 'Viber',
    messages: '1 сообщений',
    conversion: '0%',
    status: 'Отклонено',
  },
  {
    id: 65390710,
    name: '№3',
    messenger: 'VK',
    messages: '16 сообщений',
    conversion: '82%',
    status: 'Запущено',
  },
];

const MyMailing: FC = () => {
  const navigate = useNavigate();
  const [arrowRotate, setArrowRotate] = useState(false);
  const [mailings, setMailings] = useState(data);
  const [showTutotialButtons, setShowtutorialButtons] = useState(true);

  return (
    <div className={styles.section}>
      <div className={styles.mailings}>
        <div className={styles.mailing__header}>
          <h2 className={styles.mailing__title}>Мои рассылки</h2>
          <div className={styles.filter}>
            <p className={styles.filter__text}>Все</p>
            <div
              className={`${styles.filter__icon} ${
                arrowRotate ? styles.filter__icon_rotated : ''
              }`}
              onClick={() => setArrowRotate(!arrowRotate)}
            >
              <ChevronBigIcon color="#A6B3C9" width={26} height={26} />
            </div>

            {arrowRotate && (
              <div className={styles.filter__list}>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setMailings(data);
                  }}
                >
                  Все
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setMailings(data.filter((el) => el.status === 'Запущено'));
                  }}
                >
                  Запущены
                </p>
                <p
                  className={styles.filter__listText}
                  onClick={() => {
                    setArrowRotate(false);
                    setMailings(data.filter((el) => el.status === 'Отклонено'));
                  }}
                >
                  Отклонены
                </p>
              </div>
            )}
          </div>
        </div>
        <table className={styles.table}>
          <tr className={styles.table__header}>
            <th style={{ width: '120px' }}>ID</th>
            <th style={{ width: '140px' }}>Название</th>
            <th style={{ width: '162px' }}>Мессенджер</th>
            <th style={{ width: '182px' }}>Отправлено сообщений</th>
            <th style={{ width: '132px' }}>Конверсия</th>
            <th style={{ width: '122px' }}>Статус запуска</th>
          </tr>
          {mailings.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.name}</td>
              <td>{el.messenger}</td>
              <td>{el.messages}</td>
              <td>{el.conversion}</td>
              <td
                style={{
                  fontWeight: 600,
                  color: el.status === 'Запущено' ? '#00E98F' : '#FF5555',
                }}
              >
                {el.status}
              </td>
            </tr>
          ))}
        </table>
        <div className={styles.table__mobile}>
          {mailings.map((el) => (
            <div className={styles.row}>
              <div className={styles.row__iconBlock}>
                <IconWithPercents
                  messenger={el.messenger}
                  conversion={el.conversion}
                />
                <div className={styles.row__info}>
                  <div className={styles.row__header}>
                    <p className={styles.row__name}>{el.name}</p>
                    <p className={styles.row__id}>{el.id}</p>
                  </div>
                  <p className={styles.row__messages}>{el.messages}</p>
                </div>
              </div>
              <p
                className={styles.row__status}
                style={{
                  color: el.status === 'Запущено' ? '#00E98F' : '#243CBB',
                }}
              >
                {el.status}
              </p>
            </div>
          ))}
        </div>
        <div>
          <div className={styles.button__mobile}>
            <Button
              type="green"
              text="СОЗДАТЬ РАССЫЛКУ"
              width={272}
              height={56}
              onClick={() =>
                navigate(
                  window.location.pathname === '/mailing'
                    ? '/mailing/start'
                    : '/mailing/add'
                )
              }
            />
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.about__header}>
          <h3 className={styles.about__title}>Как это работает?</h3>
          <div
            onClick={() => setShowtutorialButtons(!showTutotialButtons)}
            className={`${styles.about__icon} ${
              showTutotialButtons && styles.about__icon_rotated
            }`}
          >
            <ChevronBigIcon width={26} height={26} />
          </div>
        </div>
        {showTutotialButtons && (
          <div className={styles.buttons}>
            <TutorialButton type="instruction" />
            <TutorialButton type="video" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyMailing;
