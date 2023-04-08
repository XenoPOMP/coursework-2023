import cn from 'classnames';
import { FC, useEffect, useMemo, useState } from 'react';
import styles from './AuthPage.module.scss';
import { AuthPageProps } from './AuthPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import Logotype from '@ui/Logotype/Logotype';
import useBoolean from '@hooks/useBoolean';
import { useQuery } from 'react-query';
import { LoginService } from '@services/Login.service';
import CircleLoader from '@ui/CircleLoader/CircleLoader';
import { useNavigate } from 'react-router-dom';

const AuthPage: FC<AuthPageProps> = ({}) => {
  const loc = useLocalization();
  const navigate = useNavigate();

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [canLogin, setCanLogin] = useState<boolean>(false);
  const [visible, toggleVisibility] = useBoolean(false);
  const [loginSuccessful, setLoginSuccessful] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const { data, isLoading, error, refetch } = useQuery('Login', () =>
    LoginService.login(login, password),
  );

  // Check for input format
  useEffect(() => {
    setIsError(false);

    const forbiddenCharsPattern = /([А-Яа-я]|[\s!@#$%^&*?:;№"'])+/gi;
    const lengthPattern = /^\w{3,15}$/i;

    setCanLogin(
      !forbiddenCharsPattern.test(login) &&
        lengthPattern.test(login) &&
        !forbiddenCharsPattern.test(password) &&
        lengthPattern.test(password),
    );
  }, [login, password]);

  // Login
  const onLogin = async () => {
    setIsError(false);

    await refetch().then((res) => {
      const { response, uuid } = res.data?.data;

      if (response === 'wrong data') {
        setIsError(true);
        return;
      }

      setLoginSuccessful(true);
    });
  };

  return (
    <Page
      meta={loc.meta.authForm}
      header={{
        tabIndex: 0,
        renderHeader: false,
      }}
    >
      <div className={cn(styles.page)}>
        <div className={cn(styles.container, styles.logo)}>
          <Logotype useText={false} />
        </div>

        <div className={cn(styles.container, styles.form)}>
          <div className={cn(styles.input)}>
            <svg
              viewBox='0 0 20 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM10 9L2 4V14H18V4L10 9ZM10 7L18 2H2L10 7ZM2 4V2V14V4Z' />
            </svg>

            <input
              value={login}
              onChange={(ev) => {
                setLogin(ev.target.value);
              }}
              placeholder={loc.authPage.placeholders.login}
            />
          </div>

          <div className={cn(styles.input)}>
            <svg
              width='20'
              height='27'
              viewBox='0 0 20 27'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M2.5 26.25C1.8125 26.25 1.22396 26.0052 0.734375 25.5156C0.244792 25.026 0 24.4375 0 23.75V11.25C0 10.5625 0.244792 9.97396 0.734375 9.48438C1.22396 8.99479 1.8125 8.75 2.5 8.75H3.75V6.25C3.75 4.52083 4.35938 3.04688 5.57813 1.82812C6.79688 0.609375 8.27083 0 10 0C11.7292 0 13.2031 0.609375 14.4219 1.82812C15.6406 3.04688 16.25 4.52083 16.25 6.25V8.75H17.5C18.1875 8.75 18.776 8.99479 19.2656 9.48438C19.7552 9.97396 20 10.5625 20 11.25V23.75C20 24.4375 19.7552 25.026 19.2656 25.5156C18.776 26.0052 18.1875 26.25 17.5 26.25H2.5ZM2.5 23.75H17.5V11.25H2.5V23.75ZM10 20C10.6875 20 11.276 19.7552 11.7656 19.2656C12.2552 18.776 12.5 18.1875 12.5 17.5C12.5 16.8125 12.2552 16.224 11.7656 15.7344C11.276 15.2448 10.6875 15 10 15C9.3125 15 8.72396 15.2448 8.23438 15.7344C7.74479 16.224 7.5 16.8125 7.5 17.5C7.5 18.1875 7.74479 18.776 8.23438 19.2656C8.72396 19.7552 9.3125 20 10 20ZM6.25 8.75H13.75V6.25C13.75 5.20833 13.3854 4.32292 12.6562 3.59375C11.9271 2.86458 11.0417 2.5 10 2.5C8.95833 2.5 8.07292 2.86458 7.34375 3.59375C6.61458 4.32292 6.25 5.20833 6.25 6.25V8.75Z' />
            </svg>

            <input
              type={visible ? 'text' : 'password'}
              value={password}
              onChange={(ev) => {
                setPassword(ev.target.value);
              }}
              placeholder={loc.authPage.placeholders.password}
            />

            {!visible ? (
              <svg
                className={cn(styles.visibility)}
                viewBox='0 0 20 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                onClick={toggleVisibility}
              >
                <path d='M10 11.9091C11.1364 11.9091 12.1023 11.5114 12.8977 10.7159C13.6932 9.92045 14.0909 8.95455 14.0909 7.81818C14.0909 6.68182 13.6932 5.71591 12.8977 4.92045C12.1023 4.125 11.1364 3.72727 10 3.72727C8.86364 3.72727 7.89773 4.125 7.10227 4.92045C6.30682 5.71591 5.90909 6.68182 5.90909 7.81818C5.90909 8.95455 6.30682 9.92045 7.10227 10.7159C7.89773 11.5114 8.86364 11.9091 10 11.9091ZM10 10.2727C9.31818 10.2727 8.73864 10.0341 8.26136 9.55682C7.78409 9.07955 7.54545 8.5 7.54545 7.81818C7.54545 7.13636 7.78409 6.55682 8.26136 6.07955C8.73864 5.60227 9.31818 5.36364 10 5.36364C10.6818 5.36364 11.2614 5.60227 11.7386 6.07955C12.2159 6.55682 12.4545 7.13636 12.4545 7.81818C12.4545 8.5 12.2159 9.07955 11.7386 9.55682C11.2614 10.0341 10.6818 10.2727 10 10.2727ZM10 14.6364C7.78788 14.6364 5.77273 14.0189 3.95455 12.7841C2.13636 11.5492 0.818182 9.89394 0 7.81818C0.818182 5.74242 2.13636 4.08712 3.95455 2.85227C5.77273 1.61742 7.78788 1 10 1C12.2121 1 14.2273 1.61742 16.0455 2.85227C17.8636 4.08712 19.1818 5.74242 20 7.81818C19.1818 9.89394 17.8636 11.5492 16.0455 12.7841C14.2273 14.0189 12.2121 14.6364 10 14.6364ZM10 12.8182C11.7121 12.8182 13.2841 12.3674 14.7159 11.4659C16.1477 10.5644 17.2424 9.34849 18 7.81818C17.2424 6.28788 16.1477 5.07197 14.7159 4.17045C13.2841 3.26894 11.7121 2.81818 10 2.81818C8.28788 2.81818 6.71591 3.26894 5.28409 4.17045C3.85227 5.07197 2.75758 6.28788 2 7.81818C2.75758 9.34849 3.85227 10.5644 5.28409 11.4659C6.71591 12.3674 8.28788 12.8182 10 12.8182Z' />
              </svg>
            ) : (
              <svg
                className={cn(styles.visibility)}
                viewBox='0 0 20 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                onClick={toggleVisibility}
              >
                <path d='M13.7273 9.54546L12.4091 8.22727C12.5455 7.51515 12.3409 6.84849 11.7955 6.22727C11.25 5.60606 10.5455 5.36364 9.68182 5.5L8.36364 4.18182C8.62121 4.06061 8.88258 3.9697 9.14773 3.90909C9.41288 3.84849 9.69697 3.81818 10 3.81818C11.1364 3.81818 12.1023 4.21591 12.8977 5.01136C13.6932 5.80682 14.0909 6.77273 14.0909 7.90909C14.0909 8.21212 14.0606 8.49621 14 8.76136C13.9394 9.02652 13.8485 9.28788 13.7273 9.54546ZM16.6364 12.4091L15.3182 11.1364C15.8939 10.697 16.4053 10.2159 16.8523 9.69318C17.2992 9.17046 17.6818 8.57576 18 7.90909C17.2424 6.37879 16.1553 5.16288 14.7386 4.26136C13.322 3.35985 11.7424 2.90909 10 2.90909C9.56061 2.90909 9.12879 2.93939 8.70455 3C8.2803 3.06061 7.86364 3.15152 7.45455 3.27273L6.04545 1.86364C6.66667 1.60606 7.30303 1.41288 7.95455 1.28409C8.60606 1.1553 9.28788 1.09091 10 1.09091C12.2879 1.09091 14.3258 1.72349 16.1136 2.98864C17.9015 4.25379 19.197 5.89394 20 7.90909C19.6515 8.80303 19.1932 9.63258 18.625 10.3977C18.0568 11.1629 17.3939 11.8333 16.6364 12.4091ZM17.0909 18L13.2727 14.2273C12.7424 14.3939 12.2083 14.5189 11.6705 14.6023C11.1326 14.6856 10.5758 14.7273 10 14.7273C7.71212 14.7273 5.67424 14.0947 3.88636 12.8295C2.09848 11.5644 0.80303 9.92424 0 7.90909C0.318182 7.10606 0.719697 6.35985 1.20455 5.67046C1.68939 4.98106 2.24242 4.36364 2.86364 3.81818L0.363636 1.27273L1.63636 0L18.3636 16.7273L17.0909 18ZM4.13636 5.09091C3.69697 5.48485 3.29545 5.91667 2.93182 6.38636C2.56818 6.85606 2.25758 7.36364 2 7.90909C2.75758 9.4394 3.8447 10.6553 5.26136 11.5568C6.67803 12.4583 8.25758 12.9091 10 12.9091C10.303 12.9091 10.5985 12.8902 10.8864 12.8523C11.1742 12.8144 11.4697 12.7727 11.7727 12.7273L10.9545 11.8636C10.7879 11.9091 10.6288 11.9432 10.4773 11.9659C10.3258 11.9886 10.1667 12 10 12C8.86364 12 7.89773 11.6023 7.10227 10.8068C6.30682 10.0114 5.90909 9.04546 5.90909 7.90909C5.90909 7.74243 5.92045 7.58333 5.94318 7.43182C5.96591 7.2803 6 7.12121 6.04545 6.95455L4.13636 5.09091Z' />
              </svg>
            )}
          </div>

          <div className={cn(styles.bottom)}>
            <div
              className={cn(
                styles.button,
                canLogin && !isLoading && !loginSuccessful && styles.canPress,
              )}
              onClick={onLogin}
            >
              {isLoading ? (
                <CircleLoader className={cn(styles.loader)} />
              ) : (
                <div className={cn(styles.text)}>
                  {loginSuccessful
                    ? loc.authPage.placeholders.loginSuccess
                    : loc.authPage.placeholders.loginAction}
                </div>
              )}
            </div>

            {isError && (
              <div className={cn(styles.error)}>
                <svg
                  viewBox='0 0 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M24.0437 24.0437C22.7686 25.3188 20.7013 25.3188 19.4262 24.0437L0.956311 5.57379C-0.31877 4.29871 -0.31877 2.23139 0.956311 0.956311C2.23139 -0.31877 4.29871 -0.31877 5.57379 0.956311L24.0437 19.4262C25.3188 20.7013 25.3188 22.7686 24.0437 24.0437Z' />
                  <path d='M0.956311 24.0437C-0.31877 22.7686 -0.31877 20.7013 0.956311 19.4262L19.4262 0.956311C20.7013 -0.31877 22.7686 -0.31877 24.0437 0.956311C25.3188 2.23139 25.3188 4.29871 24.0437 5.57379L5.57379 24.0437C4.29871 25.3188 2.23139 25.3188 0.956311 24.0437Z' />
                </svg>
              </div>
            )}

            {loginSuccessful && (
              <div className={cn(styles.continue)}>
                <svg
                  viewBox='0 0 30 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  onClick={() =>
                    navigate('/admin/dashboard', {
                      preventScrollReset: false,
                    })
                  }
                >
                  <path d='M29.0607 13.0607C29.6464 12.4749 29.6464 11.5251 29.0607 10.9393L19.5147 1.3934C18.9289 0.807612 17.9792 0.807612 17.3934 1.3934C16.8076 1.97918 16.8076 2.92893 17.3934 3.51472L25.8787 12L17.3934 20.4853C16.8076 21.0711 16.8076 22.0208 17.3934 22.6066C17.9792 23.1924 18.9289 23.1924 19.5147 22.6066L29.0607 13.0607ZM0 13.5H28V10.5H0V13.5Z' />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default AuthPage;
