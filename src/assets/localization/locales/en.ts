import Localization from '@localization/Localization';

const englishLocalization: Localization = {
  meta: {
    mainPage: {
      pageTitle: 'Main page',
      pageDescription: '',
      keywords: '',
    },

    servicePage: {
      initial: {
        pageTitle: 'Services',
        pageDescription: '',
        keywords: '',
      },
    },
  },

  header: {
    nav: {
      mainPage: 'Main',
      services: 'Services',
      blog: 'Blog',
    },
  },

  mainPage: {
    leftPart: {
      label: 'Do you need that special something?',
      subLabel: 'Please, take a look at our offers!',
    },

    rightPart: {
      cards: [
        {
          imageTitle: 'Very important statement',
          title: 'Our advanced software lets us...',
          content: 'No text',
        },
      ],
    },
  },

  servicePage: {
    searchPlaceholder: 'Search',
  },
};

export default englishLocalization;
