/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import CheckIcon from '../../icons/others/Check';
import styles from './button.mailing.module.css';

interface IButtonMailing {
  width: string;
  text: string;
  setSelected: Dispatch<SetStateAction<boolean>>;
}

const ButtonMailing: FC<IButtonMailing> = ({ width, text, setSelected }) => {
  const [isActive, setActive] = useState(false);
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setActive(!isActive);
          if (text === 'Число месяца') {
            setSelected(!isActive);
          }
          if (text === 'День месяца') {
            setSelected(!isActive);
          }
          if (text === 'Месяц отправки') {
            setSelected(!isActive);
          }
          console.log(text);
          console.log(setSelected);
        }}
        className={`${styles.input} `}
        style={{ width }}
      >
        {text}
      </button>
      {!isActive && (
        <span className={styles.button}>
          {' '}
          <CheckIcon color="#243CBB" width={16} height={16} />
        </span>
      )}
    </div>
  );
};

export default ButtonMailing;
