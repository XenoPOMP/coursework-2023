import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './MediaWidthView.module.scss';
import { MediaWidthViewProps } from './MediaWidthView.props';
import Media from 'react-media';
import ArgumentError from '@errors/ArgumentError';

const MediaWidthView: FC<MediaWidthViewProps> = ({
  children,
  maxWidth,
  minWidth,
}) => {
  useEffect(() => {
    if (
      minWidth !== undefined &&
      maxWidth !== undefined &&
      minWidth > maxWidth
    ) {
      throw new ArgumentError(`Min width can\`t be bigger than max width`);
    }
  }, []);

  const getQuery = (): string => {
    let leftPart = '';
    let connection = '';
    let rightPart = '';

    if (minWidth !== undefined) {
      leftPart = `(min-width: ${minWidth}px)`;
    }

    if (maxWidth !== undefined && minWidth !== undefined) {
      connection = ` and `;
    }

    if (maxWidth !== undefined) {
      rightPart = `(max-width: ${maxWidth}px)`;
    }

    return `${leftPart}${connection}${rightPart}`;
  };

  return <Media query={getQuery()} render={() => <>{children}</>} />;
};

export default MediaWidthView;
