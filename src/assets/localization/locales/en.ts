import Localization from '@localization/Localization';

import blackFridayGuideBanner from '@media/images/blog/xas12dsa.png';

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

		blogPage: {
			pageTitle: 'Blog',
			pageDescription: '',
			keywords: '',
		},

		authForm: {
			pageTitle: 'Login',
			pageDescription: '',
			keywords: '',
		},

		dashboard: {
			pageTitle: 'Dashboard',
			pageDescription: '',
			keywords: '',
		},
	},

	useFormattedTime: {
		ms: 'ms',
		s: 'sec',
		min: 'min',
		hour: 'h',
	},

	header: {
		nav: {
			mainPage: 'Main',
			services: 'Services',
			blog: 'Blog',
			settings: 'Settings',
			analytics: 'Analytics',
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

							rating: 'N/A',
						},

						reviews: [],
					},

					{
						index: 2,
						name: 'Web-portal',
						desc: 'A multi-page website that provides the user with various interactive Internet services that work within the framework of this site.',

						stats: {
							minPrice: {
								inRubles: '35000 RUB',
								inDollars: '500 USD',
							},

							executionTime: '8-16',

							hardness: 4,

							rating: 'N/A',
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

			errors: {
				noReviews: 'This service has no reviews yet',
			},
		},
	},

	settingsPage: {
		sidebar: {
			appearance: 'Appearance',
			localization: 'Localization',
			confidentiality: 'Privacy',
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

		confidentiality: {
			title: {
				title: 'Privacy',
				desc: 'Set up privacy settings: collection of analytical data, use of cookies, etc.',
			},
			items: {
				allowed: {
					title: 'Allow analytics data collection',
					desc: 'Choose whether the application will be able to collect analytical data to improve it',
				},
				allowVariants: {
					allow: 'Allow',
					disallow: 'Disallow',
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

		error: 'There are errors',
	},

	notFoundPage: {
		oopsLabel: 'Ooops!\n' + 'Page not found',
		subOopsLabel:
			'This page doesn`t exist or was removed!\n' +
			'We suggest you to go back to home.',
		backToHomeButton: 'Back to home',
	},

	agreementMessage: {
		text: [
			'Our site collects user information for analytics, such as user login time, operating system, etc.',
			'Allow the collection of information? (You can change the solution at any time in the settings)',
		],
		allow: 'Allow',
		disallow: 'Disallow',
	},

	blogPage: {
		actualArticles: [
			{
				id: '1',
				bannerImg: blackFridayGuideBanner,
				title: 'SmartAce`s guide to marketing campaigns for Black Friday',
				date: 'Monday, Dec. 12, 2022',
				content: '',
			},
			{
				id: '2',
				bannerImg: blackFridayGuideBanner,
				title: 'SmartAce`s guide to marketing campaigns for Black Friday',
				date: 'Monday, Dec. 12, 2022',
				content: '',
			},
			{
				id: '3',
				bannerImg: blackFridayGuideBanner,
				title: 'SmartAce`s guide to marketing campaigns for Black Friday',
				date: 'Monday, Dec. 12, 2022',
				content: '',
			},
		],

		articles: [
			{
				id: '4',
				title: 'World Backup day',
				date: 'Monday, Dec. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},
			{
				id: '5',
				title: 'World Backup day',
				date: 'Monday, Dec. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},
			{
				id: '6',
				title: 'World Backup day',
				date: 'Monday, Dec. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},
			{
				id: '7',
				title: 'World Backup day',
				date: 'Monday, Dec. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},
			{
				id: '8',
				title: 'World Backup day',
				date: 'Monday, Dec. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},
			{
				id: '9',
				title: 'World Backup day',
				date: 'Monday, Dec. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},
			{
				id: '10',
				title: 'World Backup day',
				date: 'Monday, Dec. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},
		],

		labels: {
			newArticles: 'New articles',
		},
	},

	authPage: {
		placeholders: {
			login: 'Login',
			password: 'Password',
			loginSuccess: 'Success!',
			loginAction: 'Log in',
		},
	},

	dashboard: {
		accessDenied: 'Access denied',
		dateParts: {
			hour: 'Last hour',
			day: 'Last day',
			week: 'Last week',
			month: 'Last month',
			year: 'Last year',
		},
		cards: {
			averageSessionTime: 'Average session time',
			sessionCount: 'Visit count',
		},
	},
};

export default englishLocalization;
