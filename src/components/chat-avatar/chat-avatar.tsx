import { memo, CSSProperties } from 'react';
import Styles from './chat-avatar.module.css';

interface ChatAvatarProps {
  img: string;
  // TODO role пока что так. Не знаю какими будут данные о пользователе
  isOnline: boolean;
  role?: boolean;
  size?: 'default' | 'large';
}

const ChatAvatar = memo(
  ({ img, isOnline, role = false, size }: ChatAvatarProps) => {
    const style: CSSProperties = {
      width: '40px',
      height: '40px',
      backgroundImage: `url(${img})`,
    };

    switch (size) {
      case 'large': {
        style.width = '80px';
        style.height = '80px';
        break;
      }
      default: {
        break;
      }
    }

    return (
      <div className={Styles.avatar} style={style}>
        {role && <div className={Styles.role} />}
        {isOnline && <div className={Styles.online} />}
      </div>
    );
  }
);

export default ChatAvatar;
