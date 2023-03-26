import { FC } from 'react';
import { PageProps } from './Page.props';
import Layout from '@components/Layout/Layout';
import MetaTitle from '@components/MetaTitle/MetaTitle';

const Page: FC<PageProps> = ({ meta, children }) => {
  return (
    <Layout>
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
