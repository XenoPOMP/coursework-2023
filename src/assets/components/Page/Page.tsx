import { FC, ReactNode } from 'react';
import { PageProps } from './Page.props';
import Layout from '@components/Layout/Layout';
import MetaTitle from '@components/MetaTitle/MetaTitle';
import type { MetaInfo } from './Page.props';
import type { HeaderProps } from '@ui/Header/Header.props';

/**
 * Component that provides page implementation.
 * Meta tag optimization included.
 *
 * @param {MetaInfo} meta            page meta info.
 * @param {ReactNode} children       page children component.
 * @param {HeaderProps} header       header render settings.
 * @constructor
 */
const Page: FC<PageProps> = ({ meta, children, header }) => {
  return (
    <Layout header={header}>
      <MetaTitle
        pageTitle={meta.pageTitle}
        pageDescription={meta.pageDescription}
        keywords={meta.keywords}
      />
      {children}
    </Layout>
  );
};

export default Page;
