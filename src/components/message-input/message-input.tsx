import { useState, ChangeEventHandler } from 'react';
import Styles from './message-input.module.css';
import IconButton from '../icon-button/IconButton';
import EmojiIcon from '../../icons/others/Emoji';
import XCircleIcon from '../../icons/others/XCircle';
import FileIcon from '../../icons/others/File';
import SlashIcon from '../../icons/others/Slash';
import ZapIcon from '../../icons/others/Zap';
import useMediaQuery from '../../hooks/useMediaQuery';

interface MessageInputProps {
  placeholder: string;
  width?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onFileClick: VoidFunction;
  onSlashClick: VoidFunction;
  onZapClick: VoidFunction;
}

function MessageInput({
  placeholder,
  width = '100%',
  onChange,
  onFileClick,
  onSlashClick,
  onZapClick,
}: MessageInputProps) {
  const [isShowSmiles, setShowSmiles] = useState(false);
  const [isShowOtherButtons, setShowOtherButtons] = useState(false);
  const isMobile = useMediaQuery('(max-width: 360px)');

  const iconColor = '#A6B3C9';
  const iconSize = isMobile ? 16 : 24;

  const smilesHandle = () => {
    setShowSmiles(!isShowSmiles);
  };

  const otherButtonsHandle = () => {
    setShowOtherButtons(!isShowOtherButtons);
  };

  return (
    <div className={Styles.inputFrame} style={{ width: `${width}` }}>
      <input
        className={Styles.input}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className={Styles.buttons}>
        <IconButton
          width={iconSize}
          height={iconSize}
          icon={FileIcon({ color: iconColor })}
          onClick={onFileClick}
        />
        <div className={isShowSmiles ? Styles.smilesButton : undefined}>
          <IconButton
            width={iconSize}
            height={iconSize}
            icon={EmojiIcon({ color: iconColor })}
            onClick={smilesHandle}
          />
        </div>
        {isShowOtherButtons && (
          <>
            <div className={Styles.slashCnt}>
              <IconButton
                width={iconSize}
                height={iconSize}
                icon={SlashIcon({ color: iconColor })}
                onClick={onSlashClick}
              />
            </div>
            <IconButton
              width={iconSize}
              height={iconSize}
              icon={ZapIcon({ color: iconColor })}
              onClick={onZapClick}
            />
          </>
        )}
        {/* TODO Иконка крестика сделана из компонента XCircle, что, может быть, не совсем правильно.
          Визуально разницы нет */}
        <div
          className={`
          ${Styles.xCircleCnt}
          ${isShowOtherButtons && Styles.xCircleCntOpened}`}
        >
          <IconButton
            width={iconSize}
            height={iconSize}
            icon={XCircleIcon({ color: iconColor })}
            onClick={otherButtonsHandle}
          />
        </div>
        {isShowSmiles && (
          <div className={Styles.smiles}>
            {/* TODO Смайлы пока сделаны так. В будущем надо доработать либо переделать */}
            <span className={Styles.smile}>&#128524;</span>
            <span className={Styles.smile}>&#128077;</span>
            <span className={Styles.smile}>&#128516;</span>
            <span className={Styles.smile}>&#128525;</span>
            <span className={Styles.smile}>&#129505;</span>

            <div className={Styles.square} />
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageInput;
