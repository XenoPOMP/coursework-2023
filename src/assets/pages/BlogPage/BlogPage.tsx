import cn from 'classnames';
import { FC } from 'react';
import styles from './BlogPage.module.scss';
import { BlogPageProps } from './BlogPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import ActualArticles from '@components/ActualArticles/ActualArticles';

const BlogPage: FC<BlogPageProps> = ({}) => {
  const loc = useLocalization();

  return (
    <Page
      meta={loc.meta.blogPage}
      header={{
        tabIndex: 2,
      }}
    >
      <div className={cn(styles.page)}>
        <div></div>

        <div className={cn(styles.content)}>
          <ActualArticles />
        </div>
      </div>
    </Page>
  );
};

export default BlogPage;
