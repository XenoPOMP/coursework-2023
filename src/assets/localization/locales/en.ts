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
    categories: [
      {
        title: 'Category name',
        services: [
          {
            index: 0,
            name: 'Service',
            desc: 'Service description (75% off block width)',

            stats: {
              minPrice: {
                inRubles: 10000,
                inDollars: 250,
              },

              executionTime: '2-6 weeks',

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
            ],
          },
        ],
      },
    ],
  },
};

export default englishLocalization;
