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

    settingsPage: {
      pageTitle: 'Settings',
      pageDescription: '',
      keywords: '',
    },

    orderPage: {
      pageTitle: 'Order',
      pageDescription: '',
      keywords: '',
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
    categories: [
      {
        title: 'Web-development',
        services: [
          {
            index: 0,
            name: 'Landing',
            desc: 'Service description',

            stats: {
              minPrice: {
                inRubles: '10000 RUB',
                inDollars: '250 USD',
              },

              executionTime: '2-6 weeks',

              hardness: 1,

              rating: 4.5,
            },

            reviews: [
              {
                name: 'Alexander Naumov',
                rating: 5,
                review:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Nascetur ridiculus mus mauris vitae ultricies leo integer. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Ridiculus mus mauris vitae ultricies leo integer malesuada. Gravida in fermentum et sollicitudin ac orci. Lacus viverra vitae congue eu. Odio morbi quis commodo odio aenean sed. Massa tincidunt dui ut ornare lectus. Consequat id porta nibh venenatis cras sed felis. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ornare quam viverra orci sagittis eu volutpat odio facilisis.',
              },

              {
                name: 'Uymanov Gleb',
                rating: 4,
                review:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris commodo quis imperdiet massa. Vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt. Nascetur ridiculus mus mauris vitae ultricies leo integer. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Ridiculus mus mauris vitae ultricies leo integer malesuada. Gravida in fermentum et sollicitudin ac orci. Lacus viverra vitae congue eu. Odio morbi quis commodo odio aenean sed. Massa tincidunt dui ut ornare lectus. Consequat id porta nibh venenatis cras sed felis. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Ornare quam viverra orci sagittis eu volutpat odio facilisis.',
              },
            ],
          },

          {
            index: 1,
            name: 'Internet shop',
            desc: 'Service description',

            stats: {
              minPrice: {
                inRubles: '25000 RUB',
                inDollars: '500 USD',
              },

              executionTime: '5-12 weeks',

              hardness: 3,

              rating: 4.75,
            },

            reviews: [],
          },
        ],
      },
    ],

    notSelectedLabel: 'Select a service',

    labels: {
      orderButton: 'Order service',

      cards: {
        price: 'Price',
        executionTime: 'Execution time',
        hardness: 'Difficulty',
        rating: 'Rating',
        example: 'Example',
      },

      cardBodies: {
        price: 'XX+',
      },
    },
  },

  settingsPage: {
    sidebar: {
      appearance: 'Appearance',
      localization: 'Localization',
      appVersion: 'App version: XX',
    },

    appearance: {
      title: {
        title: 'Appearance',
        desc: 'Change how app looks',
      },

      items: {
        theme: {
          title: 'UI Theme',
          desc: 'Select theme from list',
        },

        themeVariants: {
          light: 'Light',
          dark: 'Dark',
        },
      },
    },

    localization: {
      title: {
        title: 'Localization',
        desc: 'Configure language settings',
      },

      items: {
        languageTitle: {
          title: 'Language',
          desc: 'Select your language from list',
        },

        languageVariants: {
          russian: 'Русский',
          english: 'English',
        },

        currency: {
          title: 'Currency',
          desc: 'Choose your currency',
        },

        currencyVariants: {
          rub: 'Rubles',
          usd: 'US Dollars',
        },
      },
    },

    saveChanges: {
      save: 'Save changes',
      reject: 'Cancel',
    },
  },

  orderPage: {
    stages: {
      name: {
        label: 'What`s your name?',
        input: {
          title: '',
          placeholder: 'Enter your name',
          popup: '',
        },
      },

      contacts: {
        label: 'How can we contact with you?',
        inputs: {
          email: {
            title: 'Email',
            placeholder: 'Enter email',
            popup: '',
          },

          telegram: {
            title: 'Telegram',
            placeholder: 'Enter your Telegram tag',
            popup: '',
          },

          vk: {
            title: 'VK',
            placeholder: 'Enter your personal account link',
            popup: '',
          },
        },
      },

      final: [
        'All`s ready!',
        'Our manager will soon contact with you.',
        'Your order ID: XX',
      ],
    },

    error: 'Есть ошибки',
  },
};

export default englishLocalization;
