import { MetaInfo } from '@components/Page/Page.props';
import { OrderInputLocale } from '@type/OrderInputLocale';

export type LandingCardLocale = {
  imageTitle: string;
  title: string;
  content?: string;
};

export type ServiceReviewLocale = {
  avatar?: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
};

export type ServiceLocale = {
  index: number;
  name: string;
  desc?: string;
  stats: {
    minPrice: {
      inRubles: number;
      inDollars: number;
    };

    executionTime: string;

    hardness: 1 | 2 | 3 | 4;

    rating: number;
  };
  reviews: ServiceReviewLocale[];
};

export type SettingsTabTitleLocale = {
  title: string;
  desc: string;
};

type Localization = {
  meta: {
    mainPage: MetaInfo;
    servicePage: {
      initial: MetaInfo;
    };
    settingsPage: MetaInfo;
    orderPage: MetaInfo;
  };

  header: {
    nav: {
      mainPage: string;
      services: string;
      blog: string;
    };
  };

  mainPage: {
    leftPart: {
      label: string;
      subLabel: string;
    };

    rightPart: {
      cards: Array<LandingCardLocale>;
    };
  };

  servicePage: {
    searchPlaceholder: string;
    categories: Array<{
      title: string;
      services: ServiceLocale[];
    }>;
    notSelectedLabel: string;
    labels: {
      orderButton: string;
      cards: {
        price: string;
        executionTime: string;
        hardness: string;
        rating: string;
        example: string;
      };
      cardBodies: {
        price: string;
      };
    };
  };

  settingsPage: {
    sidebar: {
      appearance: string;
      localization: string;
      appVersion: string;
    };

    appearance: {
      title: SettingsTabTitleLocale;
      items: {
        theme: SettingsTabTitleLocale;
        themeVariants: {
          light: string;
          dark: string;
        };
      };
    };

    localization: {
      title: SettingsTabTitleLocale;
      items: {
        languageTitle: SettingsTabTitleLocale;
        languageVariants: {
          russian: string;
          english: string;
        };
      };
    };

    saveChanges: {
      save: string;
      reject: string;
    };
  };

  orderPage: {
    stages: {
      name: {
        label: string;
        input: OrderInputLocale;
      };

      contacts: {
        label: string;
        inputs: {
          email: OrderInputLocale;
          telegram: OrderInputLocale;
          vk: OrderInputLocale;
        };
      };

      final: string[];
    };

    error: string;
  };
};

export default Localization;
