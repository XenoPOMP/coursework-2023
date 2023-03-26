import { FC } from 'react';
import { MetaTitleProps } from './MetaTitle.props';
// @ts-ignore
import DocumentMeta from 'react-document-meta';

const MetaTitle: FC<MetaTitleProps> = ({
  pageTitle,
  pageDescription,
  keywords,
}) => {
  const meta = {
    title: pageTitle,
    description: pageDescription,
    meta: {
      charset: 'utf-8',
      name: {
        keywords: keywords,
      },
    },
  };

  return <DocumentMeta {...meta}></DocumentMeta>;
};

export default MetaTitle;
