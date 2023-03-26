import React from 'react';
import Page from '@components/Page/Page';
const NotFound = () => {
  return (
    <Page
      meta={{ pageTitle: '404', pageDescription: '', keywords: '' }}
      header={{
        tabIndex: -1,
      }}
    >
      Error 404: page not found
    </Page>
  );
};

export default NotFound;
