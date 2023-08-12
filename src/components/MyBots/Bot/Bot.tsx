/* eslint-disable import/no-cycle */
import { forwardRef, useContext } from 'react';
import styles from './Bot.module.css';
import Dots from '../../icons/Dots/Dots';
import TelegramIcon from '../../../icons/social/telegram';
import { Context } from '../../../app';
import useMediaQuery from '../../../hooks/useMediaQuery';

interface IBot {
  text: string;
  onClick?: (e: any) => void;
}

const Bot = forwardRef<HTMLDivElement | null, IBot>(
  ({ text, onClick }, ref) => {
    const { setMyBotsSettingsOpen } = useContext(Context);

    const matchesTablet = useMediaQuery('(max-width: 768px)');
    return (
      <div className={styles.wrapper} ref={ref} onClick={onClick}>
        <div className={styles.icons}>
          {matchesTablet ? (
            <TelegramIcon width={40} height={40} type="blue" />
          ) : (
            <TelegramIcon width={52} height={52} type="blue" />
          )}
          <button
            onClick={() => {
              setMyBotsSettingsOpen(true);
            }}
            type="button"
          >
            <Dots />
          </button>
        </div>
        <div className={styles.container}>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    );
  }
);

export default Bot;
