import AlisaIcon from '../icons/social/alisa';
import FacebookIcon from '../icons/social/facebook';
import GoogleIcon from '../icons/social/google';
import InstagramIcon from '../icons/social/instagram';
import MailruIcon from '../icons/social/mailru';
import OdnoklassnikiIcon from '../icons/social/odnoklassniki';
import TelegramIcon from '../icons/social/telegram';
import TwitterIcon from '../icons/social/twitter';
import ViberIcon from '../icons/social/viber';
import VKIcon from '../icons/social/vk';
import WebIcon from '../icons/social/web';
import WhatsappIcon from '../icons/social/whatsapp';
import YandexIcon from '../icons/social/yandex';
import YoutubeIcon from '../icons/social/youtube';
import { PlusButton } from '../components/plus-button/PlusButton';
import { Button } from '../components/Button/Button';
import { IconButton } from '../components/icon-button/IconButton';
import { CopyIcon } from '../components/icons/Copy/Copy';
import { TutorialButton } from '../components/tutorial-button/TutorialButton';
import { AddBlockButton } from '../components/add-block-button/AddBlockButton';
import { MessageIcon } from '../components/icons/add-block-button/Message';
import { CrmIcon } from '../components/icons/add-block-button/Crm';
import { GitBranchIcon } from '../components/icons/add-block-button/GitBranch';
import { SlidersIcon } from '../components/icons/add-block-button/Sliders';
import { HeadPhonesIcon } from '../components/icons/add-block-button/HeadPhones';
import { ApiIcon } from '../components/icons/add-block-button/Api';
import { DeepLinkIcon } from '../components/icons/add-block-button/DeepLink';
import { CreditCardIcon } from '../components/icons/add-block-button/CreditCard';
import { MapPinIcon } from '../components/icons/add-block-button/MapPin';

export default function AddBot() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: '10px',
        rowGap: '30px',
        marginTop: '50px',
      }}
    >
      <FacebookIcon
        type="blue"
        onClick={() => console.log('click')}
        width={60}
        height={60}
      />
      <FacebookIcon type="common" width={40} height={40} />
      <FacebookIcon type="disabled" width={20} height={20} />
      <TelegramIcon type="blue" onClick={() => console.log('click')} />
      <TelegramIcon type="common" />
      <TelegramIcon type="disabled" />
      <YoutubeIcon type="blue" onClick={() => console.log('click')} />
      <YoutubeIcon type="common" />
      <YoutubeIcon type="disabled" />
      <VKIcon type="blue" onClick={() => console.log('click')} />
      <VKIcon type="common" />
      <VKIcon type="disabled" />
      <TwitterIcon type="blue" onClick={() => console.log('click')} />
      <TwitterIcon type="common" />
      <TwitterIcon type="disabled" />
      <WebIcon type="blue" onClick={() => console.log('click')} />
      <WebIcon type="common" />
      <WebIcon type="disabled" />
      <OdnoklassnikiIcon type="blue" onClick={() => console.log('click')} />
      <OdnoklassnikiIcon type="common" />
      <OdnoklassnikiIcon type="disabled" />
      <MailruIcon type="blue" onClick={() => console.log('click')} />
      <MailruIcon type="common" />
      <MailruIcon type="disabled" />
      <YandexIcon type="blue" onClick={() => console.log('click')} />
      <YandexIcon type="common" />
      <YandexIcon type="disabled" />
      <ViberIcon type="blue" onClick={() => console.log('click')} />
      <ViberIcon type="common" />
      <ViberIcon type="disabled" />
      <WhatsappIcon type="blue" onClick={() => console.log('click')} />
      <WhatsappIcon type="common" />
      <WhatsappIcon type="disabled" />
      <InstagramIcon type="blue" onClick={() => console.log('click')} />
      <InstagramIcon type="common" />
      <InstagramIcon type="disabled" />
      <GoogleIcon type="blue" onClick={() => console.log('click')} />
      <GoogleIcon type="common" />
      <GoogleIcon type="disabled" />
      <AlisaIcon type="blue" onClick={() => console.log('click')} />
      <AlisaIcon type="common" />
      <AlisaIcon type="disabled" />
      <Button
        type="blue"
        onClick={() => console.log('click')}
        text="СИНЯЯ КНОПКА"
        width={180}
        height={46}
      />
      <Button
        type="blue"
        disabled
        onClick={() => console.log('click')}
        text="СИНЯЯ КНОПКА"
        width={180}
        height={46}
      />
      <PlusButton type='blue' onClick={() => console.log('click')} />
      <PlusButton type='blue' onClick={() => console.log('click')} disabled />
      <PlusButton type='green' onClick={() => console.log('click')} />
      <PlusButton type='green' onClick={() => console.log('click')} disabled />
      <Button
        type="green"
        onClick={() => console.log('click')}
        text="ДОБАВИТЬ БОТА"
        width={180}
        height={46}
      />
      <Button
        type="green"
        disabled
        onClick={() => console.log('click')}
        text="ЗЕЛЁНАЯ КНОПКА"
        width={180}
        height={46}
      />
      <Button
        type="grey"
        onClick={() => console.log('click')}
        text="СЕРАЯ КНОПКА"
        width={180}
        height={46}
      />
      <Button
        type="grey"
        onClick={() => console.log('click')}
        disabled
        text="СЕРАЯ КНОПКА"
        width={180}
        height={46}
      />
      <IconButton
        onClick={() => console.log('click')}
        width={40}
        height={40}
        icon={<CopyIcon width={40} height={40} />}
      />
      <IconButton
        onClick={() => console.log('click')}
        disabled
        width={40}
        height={40}
        icon={<CopyIcon width={40} height={40} />}
      />
      <TutorialButton type='instruction' />
      <TutorialButton type='instruction' disabled />
      <TutorialButton type='video' />
      <TutorialButton type='video' disabled />
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '8px' }}>
        <h3>Элемент AddBlockButton</h3>
        <AddBlockButton text="Блок сообщений" icon={<MessageIcon />} />
        <AddBlockButton
          text="Блок сообщений"
          icon={<MessageIcon />}
          disabled={true}
        />
        <AddBlockButton text="Условный блок" icon={<GitBranchIcon />} />
        <AddBlockButton text="Управление переменными" icon={<SlidersIcon />} />
        <AddBlockButton text="Сохранение данных в CRM" icon={<CrmIcon />} />
        <AddBlockButton text="Перевод на оператора" icon={<HeadPhonesIcon />} />
        <AddBlockButton text="API" icon={<ApiIcon />} />
        <AddBlockButton text="DeepLink" icon={<DeepLinkIcon />} />
        <AddBlockButton text="Оплата" icon={<CreditCardIcon />} />
        <AddBlockButton text="Координаты" icon={<MapPinIcon />} />
      </div>
    </div>
  );
}
