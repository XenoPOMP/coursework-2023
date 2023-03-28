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

    settingsPage: {
      pageTitle: 'Настройки',
      pageDescription: '',
      keywords: '',
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

    categories: [
      {
        title: 'Web-разработка',
        services: [
          {
            index: 0,
            name: 'Лендинг',
            desc: 'Описание услуги',

            stats: {
              minPrice: {
                inRubles: 10000,
                inDollars: 250,
              },

              executionTime: 'от 2 до 6 недель',

              hardness: 1,

              rating: 4.5,
            },

            reviews: [
              {
                name: 'Александр Наумов',
                rating: 5,
                review:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Nascetur ridiculus mus mauris vitae ultricies leo integer. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Ridiculus mus mauris vitae ultricies leo integer malesuada. Gravida in fermentum et sollicitudin ac orci. Lacus viverra vitae congue eu. Odio morbi quis commodo odio aenean sed. Massa tincidunt dui ut ornare lectus. Consequat id porta nibh venenatis cras sed felis. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ornare quam viverra orci sagittis eu volutpat odio facilisis.',
              },

              {
                name: 'Уйманов Глеб',
                rating: 4,
                review:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Nascetur ridiculus mus mauris vitae ultricies leo integer. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Ridiculus mus mauris vitae ultricies leo integer malesuada. Gravida in fermentum et sollicitudin ac orci. Lacus viverra vitae congue eu. Odio morbi quis commodo odio aenean sed. Massa tincidunt dui ut ornare lectus. Consequat id porta nibh venenatis cras sed felis. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ornare quam viverra orci sagittis eu volutpat odio facilisis.',
              },
            ],
          },
        ],
      },
    ],

    notSelectedLabel: 'Вы не выбрали услугу',

    labels: {
      orderButton: 'Заказать услугу',

      cards: {
        price: 'Цена',
        executionTime: 'Время исполнения',
        hardness: 'Сложность',
        rating: 'Рейтинг',
        example: 'Пример работы',
      },

      cardBodies: {
        price: 'от XX руб.',
      },
    },
  },

  settingsPage: {
    sidebar: {
      appearance: 'Внешний вид',
      localization: 'Локализация',
    },
  },
};

export default russianLocalization;
