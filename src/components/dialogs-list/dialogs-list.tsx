import { memo, Dispatch, useState, useEffect } from 'react';
import Styles from './dialogs-list.module.css';
import SearchInput from '../../ui/inputs/search-input/search-input';
import DialogsListDialog from './dialogs-list-dialog/dialogs-list-dialog';
import { IFakeDialog } from '../../services/types/chat-types';
import IconButton from '../../ui/buttons/icon-button/icon-button';
import SearchIcon from '../../ui/icons/others/search';
import MoreButtonIcon from '../../ui/icons/others/more-button';
import useMediaQuery from '../../hooks/use-media-query';

interface DialogsListProps {
  data: IFakeDialog[];
  current?: IFakeDialog | null;
  currentHandler: Dispatch<React.SetStateAction<IFakeDialog | null>>;
}

const DialogsList = memo(
  ({ data, current, currentHandler }: DialogsListProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [currentFilter, setFilter] = useState('firstNew');
    const [isSearchOpen, setSearch] = useState(true);
    const isMobile = useMediaQuery('(max-width: 360px)');

    useEffect(() => {
      if (isMobile) {
        setSearch(false);
      } else {
        setSearch(true);
      }
    }, [isMobile]);

    // TODO Заглушка. Потом удалить
    const mock = () => {};

    const searchHandler = () => {
      setSearch(!isSearchOpen);
    };

    return (
      <section className={Styles.section}>
        <div className={Styles.headingCnt}>
          <h2 className={Styles.heading}>Диалоги</h2>
          <div className={Styles.buttonsCnt}>
            <IconButton
              width={24}
              height={24}
              icon={SearchIcon({})}
              onClick={searchHandler}
            />
            <IconButton
              width={24}
              height={24}
              icon={MoreButtonIcon({})}
              onClick={mock}
            />
          </div>
        </div>
        {isSearchOpen && (
          <SearchInput
            placeholder="Поиск..."
            onChange={mock}
            hasFilter
            filterHandler={setFilter}
            extraClass={Styles.searchInputMargin}
          />
        )}
        <ul className={Styles.list}>
          {data.map((item) => (
            <DialogsListDialog
              data={item}
              isChecked={item.id === current?.id}
              currentHandler={currentHandler}
              key={item.name}
            />
          ))}
        </ul>
      </section>
    );
  }
);

export default DialogsList;
