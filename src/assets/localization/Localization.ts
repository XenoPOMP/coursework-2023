export type LandingCardLocale = {
  imageTitle: string,
  title: string,
  content?: string,
};

type Localization = {
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
};

export default Localization;
