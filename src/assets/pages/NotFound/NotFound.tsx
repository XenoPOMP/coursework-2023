import React from 'react';
import Page from '@components/Page/Page';
import cn from 'classnames';
import styles from './NotFound.module.scss';
import MediaWidthView from '@ui/mediaQueries/MediaWidthView/MediaWidthView';

const NotFound = () => {
  return (
    <Page
      meta={{ pageTitle: '404', pageDescription: '', keywords: '' }}
      header={{
        tabIndex: -1,
      }}
    >
      <div className={cn(styles.page)}>
        Error 404: page not found
        <MediaWidthView maxWidth={'1000.1px'}>
          <div
            style={{ width: '100px', aspectRatio: 1, background: 'red' }}
          ></div>
        </MediaWidthView>
      </div>
    </Page>
  );
};

export default NotFound;
