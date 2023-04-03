import cn from 'classnames';
import { FC, useEffect } from 'react';
import styles from './MediaWidthView.module.scss';
import { MediaWidthViewProps } from './MediaWidthView.props';
import Media from 'react-media';

const MediaWidthView: FC<MediaWidthViewProps> = ({
  children,
  maxWidth,
  minWidth,
}) => {
  useEffect(() => {
    // Check for max width and min width
    const maxWidthExec = /\d+(.\d+)?/.exec(`${maxWidth}`);
    const minWidthExec = /\d+(.\d+)?/.exec(`${minWidth}`);
  }, []);

  return <>{children}</>;
};

export default MediaWidthView;
