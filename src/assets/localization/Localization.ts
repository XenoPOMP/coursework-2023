import type { ChangelogRecord } from '@type/ChangelogRecord';
import type { OrderInputLocale } from '@type/OrderInputLocale';

import { MetaInfo } from '@components/Page/Page.props';

import { Theme } from '@redux/reducers/appSettingsSlice';

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
			inRubles: string;
			inDollars: string;
		};

		executionTime: string;

		hardness: 1 | 2 | 3 | 4;

		rating: number | 'N/A';
	};
	reviews: ServiceReviewLocale[];
};

export type SettingsTabTitleLocale = {
	title: string;
	desc: string;
};

export type Article = {
	id: string;
	bannerImg?: string;
	title: string;
	date: string;
	content: string;
};

type Localization = {
	meta: {
		mainPage: MetaInfo;
		servicePage: {
			initial: MetaInfo;
		};
		settingsPage: MetaInfo;
		orderPage: MetaInfo;
		blogPage: MetaInfo;
		authForm: MetaInfo;
		dashboard: MetaInfo;
	};

	useFormattedTime: {
		ms: string;
		s: string;
		min: string;
		hour: string;
	};

	header: {
		nav: {
			mainPage: string;
			services: string;
			blog: string;
			settings: string;
			analytics: string;
			menu: string;
			goBack: string;
			logout: string;
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
			errors: {
				noReviews: string;
			};
		};
	};

	settingsPage: {
		sidebar: {
			appearance: string;
			localization: string;
			confidentiality: string;
			changeLog: string;
			appVersion: string;
		};

		appearance: {
			title: SettingsTabTitleLocale;
			items: {
				theme: SettingsTabTitleLocale;
				themeVariants: {
					[theme in Theme]: string;
				};
				popups: SettingsTabTitleLocale;
				popupVariants: {
					prohibited: string;
					allowed: string;
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
				currency: SettingsTabTitleLocale;
				currencyVariants: {
					rub: string;
					usd: string;
				};
			};
		};

		confidentiality: {
			title: SettingsTabTitleLocale;
			items: {
				allowed: SettingsTabTitleLocale;
				allowVariants: {
					allow: string;
					disallow: string;
				};
			};
		};

		changeLogTab: {
			/** Changelog tab title */
			title: string;
			/** This item is grouped list of changelog records. */
			records?: ChangelogRecord[][];
			datetimeLocale: string;
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

	notFoundPage: {
		oopsLabel: string;
		subOopsLabel: string;
		backToHomeButton: string;
	};

	agreementMessage: {
		text: string[];
		allow: string;
		disallow: string;
	};

	blogPage: {
		actualArticles: Article[];
		articles: Article[];
		labels: {
			newArticles: string;
		};
	};

	authPage: {
		placeholders: {
			login: string;
			password: string;
			loginSuccess: string;
			loginAction: string;
		};
	};

	dashboard: {
		accessDenied: string;
		dateParts: {
			hour: string;
			day: string;
			week: string;
			month: string;
			year: string;
		};
		cards: {
			averageSessionTime: string;
			sessionCount: string;
		};
	};

	offlineScreen: {
		noConnectionLabel: [string, string];
		retryLabel: string;
	};
};

export default Localization;
