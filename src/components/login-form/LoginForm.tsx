import React, { FC, useEffect, useState } from 'react';
import Button from '../Button/Button';
import AuthInput from '../input-auth/AuthInput';
import NavLinkBar from '../nav-link-bar/NavLinkBar';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  signIn: () => void;
  forgotPass: () => void;
  windowWidth: number;
}

const LoginForm: FC<LoginFormProps> = ({ signIn, forgotPass, windowWidth }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.loginForm}>
      <form className={styles.loginForm__form} onSubmit={handleSubmit}>
        <div className={styles.loginForm__formContainer}>
          <AuthInput
            type="email"
            placeholder="E-mail"
            width={windowWidth <= 790 ? 500 : 570}
            height={60}
          />
          <AuthInput
            type="password"
            placeholder="Пароль"
            width={windowWidth <= 790 ? 500 : 570}
            height={60}
          />
        </div>
        <nav className={styles.loginForm__form__menu}>
          <span
            className={styles.loginForm__form__menuItems}
            onClick={forgotPass}
          >
            Забыли пароль?
          </span>
          <span className={styles.loginForm__form__menuItems} onClick={signIn}>
            Регистрация
          </span>
        </nav>
        <Button type="green" text="войти" width={260} height={64} isAuth />
      </form>
      <div className={styles.loginForm__footer}>
        <p className={styles.loginForm__footerTitle}>Быстрый вход</p>
        <NavLinkBar windowWidth={windowWidth} />
      </div>
    </div>
  );
};

export default LoginForm;
