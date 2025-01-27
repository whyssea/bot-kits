import React, { FC, useState } from 'react';

import styles from './index.module.css';

import CheckIcon from '../../ui/icons/others/check';

interface IFunnelsRow {
  el: string;
}
const FunnelsRow: FC<IFunnelsRow> = ({ el }) => {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setActive(!active)}
      className={styles.funnels__button}
    >
      {el}
      {active && <CheckIcon width={20} height={20} color="#243CBB" />}
    </button>
  );
};

export default FunnelsRow;
