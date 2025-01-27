import { memo, FormEventHandler } from 'react';
import Styles from './dialogs-main-input.module.css';
import MessageInput from '../../../ui/inputs/message-input/message-input';
import Modal from '../../../ui/modal/modal';
import FileModal from './file-modal/file-modal';
import useModal from '../../../hooks/use-modal';

const DialogMainInput = memo(() => {
  const { isModalOpen: isOpenFileModal, openModal, closeModal } = useModal();

  // TODO Заглушка. Потом убрать
  const mock = () => {};

  const fileModalHandler = () => {
    if (isOpenFileModal) {
      closeModal();
    } else {
      openModal();
    }
  };

  const submitForm: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Сообщение отправлено');
  };

  return (
    <form className={Styles.form} onSubmit={submitForm}>
      <MessageInput
        placeholder="Введите сообщение..."
        onChange={mock}
        onFileClick={fileModalHandler}
        onSlashClick={mock}
        onZapClick={mock}
      />
      <button className={Styles.button} type="submit" aria-label="Отправить" />

      {isOpenFileModal && (
        <Modal onClose={closeModal} needCloseBtn={false}>
          <FileModal modalHandler={fileModalHandler} />
        </Modal>
      )}
    </form>
  );
});

export default DialogMainInput;
