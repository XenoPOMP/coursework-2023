import cn from 'classnames';
import { FC } from 'react';
import styles from './Patch.module.scss';
import { PatchProps } from './Patch.props';
import RunningLine from '@ui/RunningLine/RunningLine';
import numericGenerator from '@utils/numericGenerator';
import { MobileView, BrowserView } from 'react-device-detect';

const Patch: FC<PatchProps> = ({}) => {
  const scrollSpeed = 8;

  return (
    <>
      <BrowserView>
        <RunningLine
          direction={'up'}
          className={cn(styles.patch)}
          scrollSpeed={scrollSpeed}
          scrollDelay={0}
        >
          <div className={cn(styles.content)}>
            {numericGenerator(70).map((key) => (
              <span className={cn(styles.word)} key={`patch-element-${key}`}>
                smartace{' '}
              </span>
            ))}
          </div>
        </RunningLine>
      </BrowserView>

      <MobileView>
        <div className={cn(styles.patch)}>
          <div className={cn(styles.content)}>
            {numericGenerator(70).map((key) => (
              <span className={cn(styles.word)} key={`patch-element-${key}`}>
                smartace{' '}
              </span>
            ))}
          </div>
        </div>
      </MobileView>
    </>
  );
};

export default Patch;
