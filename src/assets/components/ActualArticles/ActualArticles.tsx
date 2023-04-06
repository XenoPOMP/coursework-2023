import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import styles from './ActualArticles.module.scss';
import { ActualArticlesProps } from './ActualArticles.props';
import useLocalization from '@hooks/useLocalization';
import { Article } from '@localization/Localization';
import EndlessTimer from '@providers/EndlessTimer/EndlessTimer';
import { Link } from 'react-router-dom';
import MediaWidthView from '@ui/mediaQueries/MediaWidthView/MediaWidthView';

const ActualArticles: FC<ActualArticlesProps> = ({}) => {
  const loc = useLocalization();
  const [index, setIndex] = useState<number>(0);

  const actualArticles: Article[] = loc.blogPage.actualArticles;

  return (
    <>
      <Link
        to={`/blog/${actualArticles[index].id}`}
        className={cn(styles.preview)}
      >
        <img
          className={cn(styles.background)}
          src={actualArticles[index]?.bannerImg}
        />

        <MediaWidthView minWidth={841}>
          <div className={cn(styles.container, styles.date)}>
            <div className={cn(styles.block)}>
              {actualArticles[index]?.date}
            </div>
          </div>

          <div className={cn(styles.container, styles.title)}>
            {actualArticles[index]?.title}
          </div>
        </MediaWidthView>

        <MediaWidthView maxWidth={840}>
          <div className={cn(styles.container, styles.title)}>
            {actualArticles[index]?.title}
            <p>{actualArticles[index]?.date}</p>
          </div>
        </MediaWidthView>
      </Link>

      <div
        className={cn(
          styles.slider,
          index === 0 && styles.first,
          index === 1 && styles.second,
          index === 2 && styles.third,
        )}
      >
        <div
          onClick={() => {
            setIndex(0);
          }}
          className={cn(styles.item, index === 0 && styles.active)}
        ></div>

        <div
          onClick={() => {
            setIndex(1);
          }}
          className={cn(styles.item, index === 1 && styles.active)}
        ></div>

        <div
          onClick={() => {
            setIndex(2);
          }}
          className={cn(styles.item, index === 2 && styles.active)}
        ></div>
      </div>

      <div className={cn(styles.divider)}></div>
    </>
  );
};

export default ActualArticles;
