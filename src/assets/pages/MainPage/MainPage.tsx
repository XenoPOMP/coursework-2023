import Page from '@components/Page/Page';
import styles from './MainPage.module.scss';
import cn from 'classnames';

const MainPage = () => {
  return (
    <Page
      meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}
      header={{
        tabIndex: 0,
      }}
    ></Page>
  );
};

export default MainPage;
