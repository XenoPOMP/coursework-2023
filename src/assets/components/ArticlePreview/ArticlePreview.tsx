import cn from 'classnames';
import { FC } from 'react';
import styles from './ArticlePreview.module.scss';
import { ArticlePreviewProps } from './ArticlePreview.props';
import { Link } from 'react-router-dom';
import TextOverflow from 'react-text-overflow';

const ArticlePreview: FC<ArticlePreviewProps> = ({ locales }) => {
  return (
    <Link to={`/blog/${locales.id}`} className={cn(styles.preview)}>
      <h3 className={cn(styles.title)}>{locales.title}</h3>

      <TextOverflow text={locales.content} />
    </Link>
  );
};

export default ArticlePreview;
