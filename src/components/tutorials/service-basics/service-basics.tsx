import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './service-basics.module.css';
import Arrow from '../../../ui/icons/others/arrow';

const ServiceBasics: FC = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <h4 className={styles.title}>База знаний</h4>
      <span className={styles.icon}>
        <Arrow type="common" color="lightGrey" width={24} height={24} />
      </span>
    </div>
    <p className={styles.subtitle}>
      Узнай, как создать чат бота. Примеры и описание опций сервиса!{' '}
    </p>
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.marker}>&gt;</span>
          <Link className={styles.text} to="https://botkits.ru/start/">
            Начало работы в сервисе
          </Link>
        </li>
        <li className={styles.item}>
          <span className={styles.marker}>&gt;</span>
          <Link className={styles.text} to="https://botkits.ru/block-schemes/">
            Блок схемы
          </Link>
        </li>
        <li className={styles.item}>
          <span className={styles.marker}>&gt;</span>
          <Link className={styles.text} to="https://botkits.ru/newsletter/">
            Рассылка
          </Link>
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.marker}>&gt;</span>
          <Link className={styles.text} to="https://botkits.ru/configuration/">
            Конфигурации
          </Link>
        </li>
        <li className={styles.item}>
          <span className={styles.marker}>&gt;</span>
          <Link className={styles.text} to="https://botkits.ru/statistics/ ">
            Статистика
          </Link>
        </li>
        <li className={styles.item}>
          <span className={styles.marker}>&gt;</span>
          <Link className={styles.text} to="https://botkits.ru/dialogues/ ">
            Диалоги
          </Link>
        </li>
      </ul>
    </div>
  </div>
);

export default ServiceBasics;
