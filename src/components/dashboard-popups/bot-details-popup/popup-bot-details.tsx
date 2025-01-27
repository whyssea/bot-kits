import { FC } from 'react';
import styles from './popup-bot-details.module.css';
import CloseIcon from '../../../ui/icons/others/close';
import useMediaQuery from '../../../hooks/use-media-query';

interface IPopupBotDetails {
  icon: React.ReactNode;
  title: string | null | undefined;
  isOpen: boolean;
  closeModal?: () => void;
}

const PopupBotDetails: FC<IPopupBotDetails> = ({
  icon,
  title,
  isOpen,
  closeModal,
}) => {
  const matches = useMediaQuery('(max-width: 414px)');
  return (
    <div
      className={isOpen ? styles.popup : styles.popup_hidden}
      onClick={(e) => {
        if (e.target === e.currentTarget && closeModal) {
          closeModal();
        }
      }}
    >
      <div className={styles.container}>
        {icon}
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>
          Бот ответит стандартным сообщением на запрос от человека. Подходит для
          всех мессенджеров. Шаблон возможно изменить под ваши цели.
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p className={styles.marker}>{'1>'}</p>
            <p className={styles.text}>Что настроено в шаблоне</p>
          </li>

          <li className={styles.item}>
            <p className={styles.marker}>{'2>'}</p>
            <p className={styles.text}>Что настроено в шаблоне</p>
          </li>

          <li className={styles.item}>
            <p className={styles.marker}>{'3>'}</p>
            <p className={styles.text}>Что настроено в шаблоне</p>
          </li>

          <li className={styles.item}>
            <p className={styles.marker}>{'4>'}</p>
            <p className={styles.text}>Что настроено в шаблоне</p>
          </li>
        </ul>
        <div className={styles.btn_container}>
          {!matches && (
            <button className={styles.btn_cancel} type="button">
              ОТМЕНА
            </button>
          )}

          <button className={styles.btn_add} type="button">
            ДОБАВИТЬ БОТА
          </button>
        </div>
        <button type="button" className={styles.close_btn} onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default PopupBotDetails;
