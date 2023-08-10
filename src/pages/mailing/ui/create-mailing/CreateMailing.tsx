/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import EmojiPicker from 'emoji-picker-react';
import styles from './index.module.css';

import Button from '../../../../components/Button/Button';
import TextInput from '../../../../components/input/input';
import CheckIcon from '../../../../icons/others/Check';
import BracketIcon from '../../../../icons/others/Bracket';
import EmojiIcon from '../../../../icons/others/Emoji';
import BoldIcon from '../../../../icons/others/Bold';
import DeleteIcon from '../../../../icons/others/Delete';
import ItalicIcon from '../../../../icons/others/Italic';
import CodeIcon from '../../../../icons/others/Code';
import SocialButton from '../social-button/SocialButton';
import ImageIcon from '../../../../icons/others/Image';
import VideoIcon from '../../../../icons/others/Video';
import MusicIcon from '../../../../icons/others/Music';
import ButtonIcon from '../../../../icons/others/Button';
import DownloadButtons from '../../../../components/download-button/DownloadButtons';
import InlineButtons from '../inline-button/InlineButton';
import Widget from '../widget/widget';
import DownIcon from '../../../../icons/others/Down';
import ListsRow from './ListsRow';
import FunnelsRow from './FunnelsRow';
import WidgetMobileIcon from '../widget/widget-mobile-icon/WidgetMobileIcon';
import FacebookIcon from '../../../../icons/social/facebook';
import TelegramIcon from '../../../../icons/social/telegram';
import OdnoklassnikiIcon from '../../../../icons/social/odnoklassniki';
import VKIcon from '../../../../icons/social/vk';
import ViberIcon from '../../../../icons/social/viber';

const funnels = ['Воронка 1', 'Воронка 2', 'Воронка 3'];
const list = ['Все пользователи', 'Список 1', 'Список 2', 'Список 3'];

const CreateMailing: FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('Моя рассылка 1');
  const [text, setText] = useState(
    'Привет, {name}. Мы приготовили для тебя кое-что крутое 🔥'
  );
  const [activate, setActivate] = useState(false);
  const [notActivate, setNotActivate] = useState(false);
  const [showTextareaSettings, setShowTextareaSettings] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [hideSection, setHideSection] = useState(true);
  const [italicText, setItalicText] = useState(false);
  const [boldText, setBoldText] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);

  const [socialIconSelectedType, setSocialIconSelectedType] = useState<
    'Facebook' | 'Telegram' | 'Odnoklassniki' | 'VK' | 'Viber' | undefined
  >(undefined);
  const [iconSelectedType, setIconSelectedType] = useState<
    'Photo' | 'Video' | 'Music' | 'Button' | undefined
  >(undefined);
  const [textareaTextLength, setTextareaTextLength] = useState(600);

  useEffect(() => {
    if (
      socialIconSelectedType === 'Telegram' ||
      socialIconSelectedType === 'Odnoklassniki' ||
      socialIconSelectedType === 'VK'
    ) {
      setTextareaTextLength(4096);
    } else if (socialIconSelectedType === 'Viber') {
      setTextareaTextLength(7000);
    } else {
      setTextareaTextLength(600);
    }
  }, [socialIconSelectedType]);

  useEffect(() => {
    const setShowTextareaSettingsFn = () => {
      setShowEmojis(false);
      setShowTextareaSettings(false);
    };

    document.addEventListener('click', setShowTextareaSettingsFn);
    return () => {
      document.removeEventListener('click', setShowTextareaSettingsFn);
    };
  }, []);

  return (
    <div className={styles.layout}>
      {hideSection && (
        <div className={styles.section}>
          <div className={styles.creation}>
            <div style={{ marginBottom: '2px' }}>
              <div className={styles.firstStep}>
                <p style={{ margin: '0' }}>{'1 Шаг >'}</p>
                <p style={{ margin: '0' }}>Создание рассылки</p>
              </div>
              <div className={styles.inputs}>
                <div className={styles.input__name}>
                  <TextInput
                    name="mailing"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.select__block}>
                  <div className={styles.select}>
                    <p className={styles.select__text}>Список рассылки</p>
                    <div
                      className={`${styles.select__icon} ${
                        listOpen && styles.select__icon_rotated
                      }`}
                      onClick={() => setListOpen(!listOpen)}
                    >
                      <DownIcon width={16} height={16} />
                    </div>
                  </div>
                  {listOpen && (
                    <div className={styles.select__list}>
                      {list.map((el, i) => (
                        <ListsRow el={el} key={i} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <h5 className={styles.block__title}>Выберите мессенджер</h5>
              <div className={styles.block__social}>
                <div
                  onClick={() => setSocialIconSelectedType('Facebook')}
                  className={styles.social}
                >
                  <FacebookIcon
                    width={52}
                    height={52}
                    type={
                      socialIconSelectedType === 'Facebook'
                        ? 'common'
                        : 'disabled'
                    }
                  />
                </div>
                <div
                  onClick={() => setSocialIconSelectedType('Telegram')}
                  className={styles.social}
                >
                  <TelegramIcon
                    width={52}
                    height={52}
                    type={
                      socialIconSelectedType === 'Telegram'
                        ? 'common'
                        : 'disabled'
                    }
                  />
                </div>
                <div
                  onClick={() => setSocialIconSelectedType('Odnoklassniki')}
                  className={styles.social}
                >
                  <OdnoklassnikiIcon
                    width={52}
                    height={52}
                    type={
                      socialIconSelectedType === 'Odnoklassniki'
                        ? 'common'
                        : 'disabled'
                    }
                  />
                </div>
                <div
                  onClick={() => setSocialIconSelectedType('VK')}
                  className={styles.social}
                >
                  <VKIcon
                    width={52}
                    height={52}
                    type={
                      socialIconSelectedType === 'VK' ? 'common' : 'disabled'
                    }
                  />
                </div>
                <div
                  onClick={() => setSocialIconSelectedType('Viber')}
                  className={styles.social}
                >
                  <ViberIcon
                    width={52}
                    height={52}
                    type={
                      socialIconSelectedType === 'Viber' ? 'common' : 'disabled'
                    }
                  />
                </div>
              </div>
            </div>
            <div className={styles.block}>
              <h5 className={styles.block__title}>Текст сообщения</h5>
              <div
                className={styles.textarea}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTextareaSettings(true);
                }}
              >
                {showTextareaSettings && (
                  <div className={styles.textarea__settings}>
                    <div onClick={() => setBoldText(!boldText)}>
                      <BoldIcon width={24} height={24} />
                    </div>
                    <div onClick={() => setItalicText(!italicText)}>
                      <ItalicIcon />
                    </div>
                    <div onClick={() => setText(`<${text}/>`)}>
                      <CodeIcon />
                    </div>
                    <div onClick={() => setText('')}>
                      <DeleteIcon color="#A6B3C9" />
                    </div>
                  </div>
                )}
                <textarea
                  name="12"
                  id="12"
                  placeholder="Введите текст"
                  cols={30}
                  rows={10}
                  maxLength={textareaTextLength}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  draggable={false}
                  className={`${styles.textarea__input} ${
                    italicText && styles.textarea__input_italic
                  } ${boldText && styles.textarea__input_bold}`}
                />
                <div className={styles.textarea__footer}>
                  <p style={{ margin: '0' }}>
                    {text.length}/{textareaTextLength}
                  </p>
                  <div className={styles.teaxtarea__icons}>
                    <div
                      className={styles.textarea__icon}
                      onClick={() => setText(`{${text}}`)}
                    >
                      <BracketIcon width={20} height={20} />
                    </div>
                    {showEmojis && (
                      <div className={styles.textarea__emojiPicker}>
                        (
                        <EmojiPicker
                          width={300}
                          onEmojiClick={(e) => setText(`${text}${e.emoji}`)}
                        />
                        )
                      </div>
                    )}
                    <div
                      className={styles.textarea__icon}
                      onClick={() => setShowEmojis(!showEmojis)}
                    >
                      <EmojiIcon width={20} height={20} />
                    </div>
                  </div>
                </div>
              </div>
              <WidgetMobileIcon
                bottom="-270px"
                setHideSection={setHideSection}
              />
            </div>
            <div className={styles.block}>
              <h5 className={styles.block__title}>Добавить</h5>
              <div className={styles.block__icons}>
                <SocialButton
                  text="Фото"
                  active={iconSelectedType === 'Photo'}
                  onClick={() => setIconSelectedType('Photo')}
                  icon={<ImageIcon color="#fff" />}
                />
                <SocialButton
                  text="Видео"
                  active={iconSelectedType === 'Video'}
                  onClick={() => setIconSelectedType('Video')}
                  icon={<VideoIcon color="#fff" />}
                />
                <SocialButton
                  text="Аудио"
                  active={iconSelectedType === 'Music'}
                  onClick={() => setIconSelectedType('Music')}
                  icon={<MusicIcon color="#fff" />}
                />
                <SocialButton
                  text="Кнопка"
                  active={iconSelectedType === 'Button'}
                  onClick={() => setIconSelectedType('Button')}
                  icon={<ButtonIcon color="#fff" />}
                />
              </div>
              {iconSelectedType === 'Button' ? (
                <InlineButtons />
              ) : iconSelectedType !== undefined ? (
                <DownloadButtons size="large" />
              ) : null}
            </div>
            <div className={styles.block}>
              <h5 className={styles.block__title}>Активировать воронку</h5>
              <div className={styles.activation}>
                <div className={styles.activation__block}>
                  <button
                    className={
                      notActivate
                        ? `${styles.activation__button} ${styles.activation__button_disabled}`
                        : styles.activation__button
                    }
                    type="button"
                    onClick={() => {
                      setActivate(!activate);
                      setNotActivate(false);
                    }}
                    disabled={notActivate}
                  >
                    <p style={{ margin: '0' }}>Активировать</p>
                    {activate && (
                      <CheckIcon color="#243CBB" width={16} height={16} />
                    )}
                  </button>
                  {activate && (
                    <div className={styles.funnels}>
                      {funnels.map((el, i) => (
                        <FunnelsRow el={el} key={i} />
                      ))}
                    </div>
                  )}
                </div>
                <button
                  className={
                    activate
                      ? `${styles.activation__button} ${styles.activation__button_disabled}`
                      : styles.activation__button
                  }
                  type="button"
                  onClick={() => {
                    setActivate(false);
                    setNotActivate(!notActivate);
                  }}
                  disabled={activate}
                >
                  <p style={{ margin: '0' }}> Не активировать</p>
                  {notActivate && (
                    <CheckIcon color="#243CBB" width={16} height={16} />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.navigation}>
            <button
              type="button"
              className={styles.navigation__exit}
              onClick={() => window.history.back()}
            >
              ВЫЙТИ
            </button>
            <div className={styles.next}>
              <Button
                type="green"
                buttonHtmlType="button"
                text="ДАЛЕЕ"
                width={188}
                height={65}
                extraClass={styles.button__text}
                onClick={() => navigate('/mailing/conditions')}
              />
            </div>
            <div className={styles.next__mobile}>
              <Button
                type="green"
                buttonHtmlType="button"
                text="ДАЛЕЕ"
                width={130}
                height={48}
                onClick={() => navigate('/mailing/conditions')}
              />
            </div>
          </div>
        </div>
      )}
      <Widget
        italicText={italicText}
        boldText={boldText}
        name={name}
        text={text}
        hideSection={hideSection}
        setHideSection={setHideSection}
      />
    </div>
  );
};

export default CreateMailing;
