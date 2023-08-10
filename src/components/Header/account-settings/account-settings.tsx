/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router';
import styles from './account-settings.module.css';

import CopyBotIcon from '../../../icons/others/CopyBot';

import ShareIcon from '../../../icons/others/Share';
import EditIcon from '../../../icons/others/Edit';
import LinkIcon from '../../../icons/others/Link';
import InfoIcon from '../../../icons/others/Info';
import NotificationSettingsIcon from '../../../icons/others/NotificationSettings';
import TrashIcon from '../../../icons/others/Trash';
import CloseIcon from '../../../icons/others/Close';
// eslint-disable-next-line import/no-cycle
import { Context } from '../../../App';
import useMediaQuery from '../../../hooks/useMediaQuery';

interface IAccountSettings {
  isOpen: boolean;
  setAccountSettingsOpen: Dispatch<SetStateAction<boolean>>;
  setIsRenamePopupOpened?: Dispatch<SetStateAction<boolean>>;
  setIsShareAccessPopupOpened?: Dispatch<SetStateAction<boolean>>;
  setIsCopyLinkPopupOpened?: Dispatch<SetStateAction<boolean>>;
  setIsConnectionInfoPopupOpened?: Dispatch<SetStateAction<boolean>>;
  setIsNotificationsSettingsPopupOpened?: Dispatch<SetStateAction<boolean>>;
}

const AccountSettings: FC<IAccountSettings> = ({
  isOpen,
  setAccountSettingsOpen,
  setIsRenamePopupOpened,
  setIsShareAccessPopupOpened,
  setIsCopyLinkPopupOpened,
  setIsConnectionInfoPopupOpened,
  setIsNotificationsSettingsPopupOpened,
}) => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { settingsOpen, setSettingOpen } = useContext(Context);
  const matches = useMediaQuery('(max-width: 414px)');

  return (
    <div
      className={
        !isOpen && !settingsOpen
          ? `${styles.container} ${styles.container_default}`
          : `${styles.container} ${styles.container_active}`
      }
    >
      <ul className={styles.list}>
        <li
          className={styles.item}
          onClick={() => {
            navigate('/add-bot');
            setAccountSettingsOpen(false);
            setSettingOpen(false);
          }}
        >
          <div className={styles.option}>
            <CopyBotIcon color={matches ? '#A6B3C9' : '#d7deea'} />
            <p className={styles.text}>
              {!matches ? 'Копировать бота' : 'Копировать'}
            </p>
          </div>
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setIsShareAccessPopupOpened?.(true);
            setAccountSettingsOpen(false);
            setSettingOpen(false);
          }}
        >
          <div className={styles.option}>
            <ShareIcon color={matches ? '#A6B3C9' : '#d7deea'} />
            <p className={styles.text}>Общий доступ</p>
          </div>
        </li>
        <li
          className={styles.item}
          onClick={() => {
            setIsRenamePopupOpened?.(true);
            setAccountSettingsOpen(false);
            setSettingOpen(false);
          }}
        >
          <div className={styles.option}>
            <EditIcon color={matches ? '#A6B3C9' : '#d7deea'} />
            <p className={styles.text}>Переименовать</p>
          </div>
        </li>
        {!matches && (
          <>
            <li
              className={styles.item}
              onClick={() => {
                setIsCopyLinkPopupOpened?.(true);
                setAccountSettingsOpen(false);
                setSettingOpen(false);
              }}
            >
              <div className={styles.option}>
                <LinkIcon color={matches ? '#A6B3C9' : '#d7deea'} />
                <p className={styles.text}>Получить ссылку</p>
              </div>
            </li>
            <li
              className={styles.item}
              onClick={() => {
                setIsConnectionInfoPopupOpened?.(true);
                setAccountSettingsOpen(false);
                setSettingOpen(false);
              }}
            >
              <div className={styles.option}>
                <InfoIcon color={matches ? '#A6B3C9' : '#d7deea'} />
                <p className={styles.text}>Информация</p>
              </div>
            </li>
            <li
              className={styles.item}
              onClick={() => {
                setIsNotificationsSettingsPopupOpened?.(true);
                setAccountSettingsOpen(false);
                setSettingOpen(false);
              }}
            >
              <div className={styles.option}>
                <NotificationSettingsIcon
                  color={matches ? '#A6B3C9' : '#d7deea'}
                />
                <p className={styles.text}>Настройка уведомлений</p>
              </div>
            </li>
          </>
        )}
        {matches && (
          <>
            <li
              className={styles.item}
              onClick={() => {
                setIsConnectionInfoPopupOpened?.(true);
                setAccountSettingsOpen(false);
                setSettingOpen(false);
              }}
            >
              <div className={styles.option}>
                <InfoIcon color={matches ? '#A6B3C9' : '#d7deea'} />
                <p className={styles.text}>Информация</p>
              </div>
            </li>
            <li
              className={styles.item}
              onClick={() => {
                setIsNotificationsSettingsPopupOpened?.(true);
                setAccountSettingsOpen(false);
                setSettingOpen(false);
              }}
            >
              <div className={styles.option}>
                <NotificationSettingsIcon
                  color={matches ? '#A6B3C9' : '#d7deea'}
                />
                <p className={styles.text}>Настройка уведомлений</p>
              </div>
            </li>
            <li
              className={styles.item}
              onClick={() => {
                setIsCopyLinkPopupOpened?.(true);
                setAccountSettingsOpen(false);
                setSettingOpen(false);
              }}
            >
              <div className={styles.option}>
                <LinkIcon color={matches ? '#A6B3C9' : '#d7deea'} />
                <p className={styles.text}>Получить ссылку</p>
              </div>
            </li>
          </>
        )}

        <li
          className={styles.item}
          onClick={() => {
            setAccountSettingsOpen(false);
            setSettingOpen(false);
          }}
        >
          <div className={styles.option}>
            <TrashIcon color={matches ? '#A6B3C9' : '#d7deea'} />
            <p className={styles.text}>Удалить</p>
          </div>
        </li>
        {matches && (
          <li
            className={styles.item}
            onClick={() => {
              setAccountSettingsOpen(false);
              setSettingOpen(false);
            }}
          >
            <div className={styles.option}>
              <CloseIcon color={matches ? '#A6B3C9' : '#d7deea'} />
              <p className={styles.text}>Отмена</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AccountSettings;
