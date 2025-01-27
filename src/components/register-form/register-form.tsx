import React, { FC, useState } from 'react';
import Button from '../../ui/buttons/button/button';
import HidePasswordIcon from '../../ui/icons/others/hide-password';
import AuthInput from '../../ui/inputs/input-auth/input-auth';
import NavLinkBar from '../nav-link-bar/nav-link-bar';
import styles from './register-form.module.css';
import SelectCodeNumber from '../select-code-number/select-code-number';
import items from '../../utils/items-for-register';

interface RegisterFormProps {
  logIn: () => void;
  handleRegister: () => void;
  windowWidth: number;
}

const RegisterForm: FC<RegisterFormProps> = ({
  logIn,
  handleRegister,
  windowWidth,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleRegister();
  };

  return (
    <div className={styles.registerForm}>
      <div className={styles.registerForm__socialContainer}>
        <p className={styles.registerForm__socialContainer__title}>
          Создай аккаунт с помощью
        </p>
        <div className={styles.registerForm__socialContainer__navBar}>
          <NavLinkBar windowWidth={windowWidth} />
        </div>
        <p className={styles.registerForm__socialContainer__footerText}>или</p>
      </div>
      <div className={styles.registerForm__wrapper}>
        <form className={styles.registerForm__form} onSubmit={handleSubmit}>
          <div className={styles.registerForm__inputContainer}>
            <AuthInput
              type="text"
              placeholder="Имя"
              width={windowWidth <= 790 ? 300 : 325}
              height={60}
            />
            <AuthInput
              type="email"
              placeholder="E-mail"
              width={windowWidth <= 790 ? 300 : 325}
              height={60}
              error
              textError="Ошибка"
            />
            <div className={styles.registerForm__passwordContainer}>
              <AuthInput
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль"
                width={windowWidth <= 790 ? 300 : 325}
                height={60}
              />
              <button
                className={styles.registerForm__passwordHide}
                type="button"
                onClick={handlePasswordVisibility}
              >
                <HidePasswordIcon />
              </button>
            </div>

            <div className={styles.registerForm__phoneContainer}>
              <SelectCodeNumber items={items} />
              <div className={styles.registerForm__phoneInput}>
                <AuthInput
                  type="text"
                  placeholder="Телефон"
                  width={windowWidth <= 790 ? 175 : 200}
                  height={60}
                />
              </div>
            </div>
          </div>
          <Button
            type="green"
            text="создать аккаунт"
            width={windowWidth <= 660 ? 320 : 260}
            height={64}
            isAuth
            buttonHtmlType="submit"
          />
        </form>

        <div className={styles.registerForm__footer}>
          <span className={styles.registerForm__footer__text}>
            Уже прошли регистрацию?
          </span>
          <span className={styles.registerForm__footer__link} onClick={logIn}>
            Войти
          </span>
        </div>
        <div className={styles.registerForm__authImage} />
      </div>
    </div>
  );
};

export default RegisterForm;
