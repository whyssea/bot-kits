import React, { FC } from 'react';

import styles from './button-add-bot.module.css';
import PlusBtn from '../../../utils/plusBtn';
import Button from '../button/button';

export interface IBtnAddBot {
  sizeSmall: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const BtnAddBot: FC<IBtnAddBot> = ({ sizeSmall, disabled, onClick }) => {
  return sizeSmall ? (
    <button
      className={styles.btn}
      name="button"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      <PlusBtn />
    </button>
  ) : (
    <Button type="blue" width={182} height={42} disabled={disabled}>
      ДОБАВИТЬ БОТА
    </Button>
  );
};

export default BtnAddBot;
