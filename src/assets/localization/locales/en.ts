import Localization from '@localization/Localization';
import Emoji from 'react-ios-emojis';

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

			{
				title: 'Hosting',
				services: [
					{
						index: 3,
						name: 'VPS server',
						desc:
							'A virtual private server, a machine on which all the software and all ' +
							'the data necessary for the operation of a website or application are located.',

						stats: {
							minPrice: {
								inRubles: '1000 RUB per month',
								inDollars: '15 USD per month',
							},

							executionTime: 'instantly',

							hardness: 1,

							rating: 'N/A',
						},

						reviews: [],
					},

					{
						index: 4,
						name: 'Website hosting',
						desc: 'Order a dedicated web server for your site.',

						stats: {
							minPrice: {
								inRubles: '850 RUB per month',
								inDollars: '15 USD per month',
							},

							executionTime: 'instantly',

							hardness: 1,

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
			changeLog: 'What`s new?',
			appVersion: 'vXX',
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
					retroWave: 'Retro-wave',
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

		changeLogTab: {
			title: 'What`s new?',
			records: [
				[
					{
						version: '1.0',
						date: {
							day: 7,
							month: 4,
							year: 2023,
						},
						paragraphs: ['First release version of application.'],
					},

					{
						version: '1.0.1',
						date: {
							day: 7,
							month: 4,
							year: 2023,
						},
						paragraphs: [
							'The changes on the blog page are designed to improve the experience of using the app.',
							'Now the images of current articles are loaded line by line, and using the download icon.',
						],
					},

					{
						version: '1.0.1.1',
						date: {
							day: 8,
							month: 4,
							year: 2023,
						},
						paragraphs: [
							'Visual changes on the blog page.',
							'The paddings in the link to the article have been changed.',
						],
					},

					{
						version: '1.0.2',
						date: {
							day: 8,
							month: 4,
							year: 2023,
						},
						paragraphs: [
							'Changes in the collection of analytical data.',
							'Now the application will not connect to the server if the user has banned the collection of analytical data.',
						],
					},
				],

				[
					{
						version: '1.1',
						date: {
							day: 10,
							month: 4,
							year: 2023,
						},
						paragraphs: [
							'Added admin dashboard page.',
							'To open this page you have to login first.',
						],
					},

					{
						version: '1.1.1',
						date: {
							day: 11,
							month: 4,
							year: 2023,
						},
						paragraphs: ['Sign out button has been added to the dashboard.'],
					},

					{
						version: '1.1.2',
						date: {
							day: 6,
							month: 4,
							year: 2023,
						},
						paragraphs: [
							'The width of all pages was limited.',
							'Now the page will not stretch in width by more than 1920 pixels.',
						],
					},
				],

				[
					{
						version: '1.2.0',
						date: {
							day: 6,
							month: 5,
							year: 2023,
						},
						paragraphs: [
							'This version brings various bug fixes for various browsers.',
							'* The size of the interface elements in the header has been fixed.',
							'* Fixed the location of the logo in the header in Firefox.',
						],
					},

					{
						version: '1.2.2',
						date: {
							day: 8,
							month: 5,
							year: 2023,
						},
						paragraphs: [
							`Added emojis.`,
							'* Added library ``react-ios-emojis`` that provides iOS emojis.',
							'* Changed the emoji display on the settings page.',
						],
					},

					{
						version: '1.2.3',
						date: {
							day: 12,
							month: 5,
							year: 2023,
						},
						paragraphs: [
							'Added new services:',
							'* Web-portal.',
							'* VPS.',
							'* Website hosting.',
						],
					},

					{
						version: '1.2.4',
						date: {
							day: 13,
							month: 5,
							year: 2023,
						},
						paragraphs: [`This update adds changelog page.`],
					},
				],

				[
					{
						version: '1.3.0',
						date: {
							day: 14,
							month: 5,
							year: 2023,
						},
						paragraphs: [`New theme - retro-wave!`],
					},
				],
			],
			datetimeLocale: 'en-US',
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
