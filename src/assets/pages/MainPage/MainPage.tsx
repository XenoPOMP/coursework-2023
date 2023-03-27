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
    >
      <div className={cn(styles.page)}>
        <section></section>

        <section></section>
      </div>
    </Page>
  );
};

export default MainPage;
