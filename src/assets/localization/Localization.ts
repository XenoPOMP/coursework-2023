import { MetaInfo } from "@components/Page/Page.props";

export type LandingCardLocale = {
  imageTitle: string,
  title: string,
  content?: string,
};

type Localization = {
  meta: {
    mainPage: MetaInfo,
    servicePage: {
      initial: MetaInfo
    }
  }

  header: {
    nav: {
      mainPage: string,
      services: string,
      blog: string,
    },
  },

  mainPage: {
    leftPart: {
      label: string,
      subLabel: string,
    },

    rightPart: {
      cards: Array<LandingCardLocale>,
    },
  },

  servicePage: {
    searchPlaceholder: string
  }
};

export default Localization;
