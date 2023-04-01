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

    orderPage: {
      pageTitle: 'Заказ',
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
                inRubles: '10000 руб.',
                inDollars: '250 долларов',
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

          {
            index: 1,
            name: 'Интернет-магазин',
            desc: 'Описание услуги',

            stats: {
              minPrice: {
                inRubles: '25000 руб.',
                inDollars: '500 долларов',
              },

              executionTime: 'от 5 до 12 недель',

              hardness: 3,

              rating: 4.75,
            },

            reviews: [],
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
        price: 'от XX',
      },
    },
  },

  settingsPage: {
    sidebar: {
      appearance: 'Внешний вид',
      localization: 'Локализация',
      appVersion: 'Версия приложения: XX',
    },

    appearance: {
      title: {
        title: 'Внешний вид',
        desc: 'Измените то, как будет выглядеть приложение',
      },

      items: {
        theme: {
          title: 'Тема интерфейса',
          desc: 'Выберете тему из списка',
        },

        themeVariants: {
          light: 'Светлая',
          dark: 'Темная',
        },
      },
    },

    localization: {
      title: {
        title: 'Локализация',
        desc: 'Настройте языковые настройки приложения',
      },

      items: {
        languageTitle: {
          title: 'Язык',
          desc: 'Выберете ваш язык из списка',
        },

        languageVariants: {
          russian: 'Русский',
          english: 'English',
        },

        currency: {
          title: 'Валюта',
          desc: 'Выберите вашу валюту',
        },

        currencyVariants: {
          rub: 'Рубли',
          usd: 'Доллары США',
        },
      },
    },

    saveChanges: {
      save: 'Сохранить изменения',
      reject: 'Отменить',
    },
  },

  orderPage: {
    stages: {
      name: {
        label: 'Как к вам обращаться?',
        input: {
          title: '',
          placeholder: 'Введите ваше имя',
          popup: '',
        },
      },

      contacts: {
        label: 'Как с вами связаться?',
        inputs: {
          email: {
            title: 'Электронная почта',
            placeholder: 'Введите адрес электронной почты',
            popup: '',
          },

          telegram: {
            title: 'Телеграм',
            placeholder: 'Введите ваш тег в Телеграме',
            popup: '',
          },

          vk: {
            title: 'ВК',
            placeholder: 'Введите ссылку на ВК',
            popup: '',
          },
        },
      },

      final: [
        'Все готово!',
        'Совсем скоро наш менеджер свяжиться с вами.',
        'Номер вашего заказа: XX',
      ],
    },

    error: 'Есть ошибки',
  },
};

export default russianLocalization;
