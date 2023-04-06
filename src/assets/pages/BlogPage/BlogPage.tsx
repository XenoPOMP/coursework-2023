import cn from 'classnames';
import { FC } from 'react';
import styles from './BlogPage.module.scss';
import { BlogPageProps } from './BlogPage.props';
import Page from '@components/Page/Page';
import useLocalization from '@hooks/useLocalization';
import ActualArticles from '@components/ActualArticles/ActualArticles';
import ArticlePreview from '@components/ArticlePreview/ArticlePreview';

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

          <div className={cn(styles.newArticles)}>
            <h2>{loc.blogPage.labels.newArticles}</h2>

            <div className={cn(styles.grid)}>
              {loc.blogPage.articles
                .reverse()
                .slice(1, 7)
                .reverse()
                .map((art) => (
                  <ArticlePreview locales={art} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default BlogPage;
