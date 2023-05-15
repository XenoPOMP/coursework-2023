import Localization from '@localization/Localization';
import Emoji from 'react-ios-emojis';

import blackFridayGuideBanner from '@media/images/blog/xas12dsa.png';

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

		blogPage: {
			pageTitle: 'Блог',
			pageDescription: '',
			keywords: '',
		},

		authForm: {
			pageTitle: 'Вход',
			pageDescription: '',
			keywords: '',
		},

		dashboard: {
			pageTitle: 'Панель администратора',
			pageDescription: '',
			keywords: '',
		},
	},

	useFormattedTime: {
		ms: 'мс',
		s: 'сек',
		min: 'мин',
		hour: 'ч',
	},

	header: {
		nav: {
			mainPage: 'Главная',
			services: 'Услуги',
			blog: 'Блог',
			settings: 'Настройки',
			analytics: 'Аналитика',
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

							rating: 'N/A',
						},

						reviews: [],
					},

					{
						index: 2,
						name: 'Веб-портал',
						desc: 'Многостраничный сайт, предоставляющий пользователю различные интерактивные интернет-сервисы, которые работают в рамках этого сайта.',

						stats: {
							minPrice: {
								inRubles: '35000 руб.',
								inDollars: '500 долларов',
							},

							executionTime: 'от 8 до 16 недель',

							hardness: 4,

							rating: 'N/A',
						},

						reviews: [],
					},
				],
			},

			{
				title: 'Хостинг',
				services: [
					{
						index: 3,
						name: 'VPS сервер',
						desc:
							'Виртуальный приватный сервер, машина, на которой находится все программное ' +
							'обеспечение и все данные, необходимые для работы веб-сайта или приложения.',

						stats: {
							minPrice: {
								inRubles: '1000 руб. / месяц',
								inDollars: '15 долларов / месяц',
							},

							executionTime: 'моментально',

							hardness: 1,

							rating: 'N/A',
						},

						reviews: [],
					},

					{
						index: 4,
						name: 'Хостинг сайта',
						desc: 'Закажите выделенный web-сервер для вашего сайта.',

						stats: {
							minPrice: {
								inRubles: '850 руб. / месяц',
								inDollars: '15 долларов / месяц',
							},

							executionTime: 'моментально',

							hardness: 1,

							rating: 'N/A',
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

			errors: {
				noReviews: 'У этой услуги пока что нет отзывов',
			},
		},
	},

	settingsPage: {
		sidebar: {
			appearance: 'Внешний вид',
			localization: 'Локализация',
			confidentiality: 'Конфиденциальность',
			changeLog: 'Что нового?',
			appVersion: 'vXX',
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
					retroWave: 'Ретро-вейв',
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

		confidentiality: {
			title: {
				title: 'Конфиденциальность',
				desc: 'Настройте параметры конфиденциальности: сбор аналитических данных, использование файлов cookie и т.д.',
			},
			items: {
				allowed: {
					title: 'Разрешить сбор аналитических данных',
					desc: 'Выберите, сможет ли приложение собирать аналитические данные для его улучшения',
				},
				allowVariants: {
					allow: 'Разрешить',
					disallow: 'Запретить',
				},
			},
		},

		changeLogTab: {
			title: 'Что нового?',
			records: [
				[
					{
						version: '1.0',
						date: {
							day: 7,
							month: 4,
							year: 2023,
						},
						paragraphs: ['Первая релизная версия приложения'],
					},

					{
						version: '1.0.1',
						date: {
							day: 7,
							month: 4,
							year: 2023,
						},
						paragraphs: [
							'Изменения на странице блога призваны улучшить опыт использования приложения.',
							'Теперь изображения актуальных статей загружается на построчно, а с использованием иконки загрузки.',
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
							'Визуальные изменения на странице блога.',
							'Изменены отступы в ссылке на статью.',
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
							'Изменения в сборе аналитических данных.',
							'Теперь приложение не будет подключаться к серверу, если пользователь запретил сбор аналитических данных.',
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
							'Была добавлена страница для администраторов.',
							'Чтобы зайти на неё, необходимо войти в аккаунт администратора.',
						],
					},

					{
						version: '1.1.1',
						date: {
							day: 11,
							month: 4,
							year: 2023,
						},
						paragraphs: [
							'Была добавлена кнопка выхода из аккаунта администратора.',
						],
					},

					{
						version: '1.1.2',
						date: {
							day: 6,
							month: 5,
							year: 2023,
						},
						paragraphs: [
							'Ширина всех страниц была ограничена.',
							'Теперь страница не будет растягиваться по ширине больше, чем на 1920 пикселей.',
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
							'Эта версия приносит различные фиксы багов в браузерах.',
							'* Был исправлен размер элементов интерфейса в шапке.',
							'* Исправил расположение логотипа в шапке в Firefox.',
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
							`На сайт были добавлены эмодзи.`,
							'* Добавлена библиотека ``react-ios-emojis``.',
							'* Поменял отображение эмодзи на странице настроек.',
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
							'Были добавлены новые услуги.',
							'* Веб-портал.',
							'* VPS.',
							'* Хостинг вебсайта.',
						],
					},

					{
						version: '1.2.4',
						date: {
							day: 13,
							month: 5,
							year: 2023,
						},
						paragraphs: [`Эта версия добавляет страницу с историей версий.`],
					},
				],

				[
					{
						version: '1.3.0',
						date: {
							day: 13,
							month: 5,
							year: 2023,
						},
						paragraphs: [`Новая тема - ретровейв!`],
					},

					{
						version: '1.3.1',
						date: {
							day: 14,
							month: 5,
							year: 2023,
						},
						paragraphs: ['Был добавлен экран ``Нет подключения к сети``'],
					},
				],

				[
					{
						version: '1.4.0',
						date: {
							day: 15,
							month: 5,
							year: 2023,
						},
						paragraphs: [
							'Эта версия привносит всплывающие сообщения для элементов интрефейса.',
						],
					},
				],
			],
			datetimeLocale: 'ru-RU',
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

	notFoundPage: {
		oopsLabel: 'Упс!\n' + 'Страница не найдена',
		subOopsLabel:
			'Эта страница не существует или была удалена!\n' +
			'Предлагаем вам вернуться на главную страницу.',
		backToHomeButton: 'Вернуться домой',
	},

	agreementMessage: {
		text: [
			'Наш сайт собирает информацию о пользователях для аналитики, такие, как время входа пользователя, операционная система и т.д.',
			'Разрешить сбор информации? (Вы можете поменять решение в любой момент в настройках)',
		],
		allow: 'Разрешить',
		disallow: 'Запретить',
	},

	blogPage: {
		actualArticles: [
			{
				id: '1',
				bannerImg: blackFridayGuideBanner,
				title:
					'Гайд от SmartAce по проведению маркетинговых кампаний в Черную Пятницу',
				date: 'Понедельник, Дек. 12, 2022',
				content: '',
			},
			{
				id: '2',
				bannerImg: blackFridayGuideBanner,
				title:
					'Гайд от SmartAce по проведению маркетинговых кампаний в Черную Пятницу',
				date: 'Понедельник, Дек. 12, 2022',
				content: '',
			},
			{
				id: '3',
				bannerImg: blackFridayGuideBanner,
				title:
					'Гайд от SmartAce по проведению маркетинговых кампаний в Черную Пятницу',
				date: 'Понедельник, Дек. 12, 2022',
				content: '',
			},
		],

		articles: [
			{
				id: '4',
				title: 'Всемирный день бекапа',
				date: 'Понедельник, Дек. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},

			{
				id: '5',
				title: 'Всемирный день бекапа',
				date: 'Понедельник, Дек. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},

			{
				id: '6',
				title: 'Всемирный день бекапа',
				date: 'Понедельник, Дек. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},

			{
				id: '7',
				title: 'Всемирный день бекапа',
				date: 'Понедельник, Дек. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},

			{
				id: '8',
				title: 'Всемирный день бекапа',
				date: 'Понедельник, Дек. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},

			{
				id: '9',
				title: 'Всемирный день бекапа',
				date: 'Понедельник, Дек. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},

			{
				id: '10',
				title: 'Всемирный день бекапа',
				date: 'Понедельник, Дек. 12, 2022',
				content:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et. Morbi non arcu risus quis varius quam. Diam sollicitudin tempor id eu nisl nunc.',
			},
		],

		labels: {
			newArticles: 'Новые статьи',
		},
	},

	authPage: {
		placeholders: {
			login: 'Логин',
			password: 'Пароль',
			loginSuccess: 'Успешно!',
			loginAction: 'Войти',
		},
	},

	dashboard: {
		accessDenied: 'Доступ запрещен',
		dateParts: {
			hour: 'За час',
			day: 'За день',
			week: 'За неделю',
			month: 'За месяц',
			year: 'За год',
		},
		cards: {
			averageSessionTime: 'Среднее время сеанса',
			sessionCount: 'Кол-во посещений',
		},
	},

	offlineScreen: {
		noConnectionLabel: [
			'Нет подключения к сети',
			'Пожалуйста, проверьте ваше подключение',
		],
		retryLabel: 'Повторить попытку',
	},
};

export default russianLocalization;
