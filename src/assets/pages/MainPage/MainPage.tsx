import Page from '@components/Page/Page';
import styles from './MainPage.module.scss';
import cn from 'classnames';
import useLocalization from '@hooks/useLocalization';
import Patch from '@ui/Patch/Patch';

const MainPage = () => {
  const loc = useLocalization();

  return (
    <Page
      meta={{ pageTitle: 'Main', pageDescription: '', keywords: '' }}
      header={{
        tabIndex: 0,
      }}
    >
      <div className={cn(styles.page)}>
        <section className={cn(styles.somethingSpecial)}>
          <div className={cn(styles.label)}>{loc.mainPage.leftPart.label}</div>
          <div className={cn(styles.subLabel)}>
            {loc.mainPage.leftPart.subLabel}
          </div>
        </section>

        <section className={cn(styles.cards)}>
          <Patch />

          <div className={cn(styles.content)}></div>
        </section>
      </div>
    </Page>
  );
};

export default MainPage;
