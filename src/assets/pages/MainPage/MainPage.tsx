import Page from '@components/Page/Page';
import styles from './MainPage.module.scss';
import cn from 'classnames';
import useLocalization from '@hooks/useLocalization';
import Patch from '@ui/Patch/Patch';
import LandingCard from '@ui/LandingCard/LandingCard';
import imageZero from '@media/images/landing/image0.png';
import numericGenerator from '@utils/numericGenerator';

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

        <div className={cn(styles.patchPlaceholder)}>
          <Patch />
        </div>

        <section className={cn(styles.cards)}>
          <div className={cn(styles.content)}>
            {numericGenerator(3).map(() => (
              <LandingCard
                img={imageZero}
                locales={loc.mainPage.rightPart.cards[0]}
              />
            ))}
          </div>
        </section>
      </div>
    </Page>
  );
};

export default MainPage;
