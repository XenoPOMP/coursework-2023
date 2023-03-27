import cn from 'classnames';
import { FC } from 'react';
import styles from './ServicePage.module.scss';
import { ServicePageProps } from './ServicePage.props';
import Patch from '@ui/Patch/Patch';
import numericGenerator from '@utils/numericGenerator';
import LandingCard from '@ui/LandingCard/LandingCard';
import imageZero from '@media/images/landing/image0.png';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';

const ServicePage: FC<ServicePageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <Page
      meta={loc.meta.servicePage.initial}
      header={{
        tabIndex: 1,
      }}
    ></Page>
  );
};

export default ServicePage;
