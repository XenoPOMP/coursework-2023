import Localization from '@localization/Localization';

const russianLocalization: Localization = {
  meta: {
    mainPage: {
      pageTitle: 'Главная',
      pageDescription: '',
      keywords: '',
    },

    servicePage: {
      initial: {
        pageTitle: 'Услуги',
        pageDescription: '',
        keywords: '',
      },
    },
  },

  header: {
    nav: {
      mainPage: 'Главная',
      services: 'Услуги',
      blog: 'Блог',
    },
  },

  mainPage: {
    leftPart: {
      label: 'Вам нужно что-то особенное?',
      subLabel: 'Пожалуйста, посмотрите на наши предложения!',
    },

    rightPart: {
      cards: [
        {
          imageTitle: 'Очень важное заявление',
          title: 'Наше передовое программное обеспечение позволяет вам...',
          content: 'Крутота блин реально ихихихихихихихихихихиххх',
        },
      ],
    },
  },

  servicePage: {
    searchPlaceholder: 'Поиск',
  },
};

export default russianLocalization;
