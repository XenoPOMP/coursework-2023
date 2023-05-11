import { ServiceLocale } from '@localization/Localization';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Page from '@components/Page/Page';

import useLocalization from '@hooks/useLocalization';

import styles from './OrderPage.module.scss';
import { OrderPageProps } from './OrderPage.props';

const OrderPage: FC<OrderPageProps> = ({}) => {
	const loc = useLocalization();
	const navigate = useNavigate();

	// @ts-ignore
	const serviceId = parseInt(useSearchParams()[0].get('service'));
	let orderId = useState<string>(uuid())[0];

	const getLocales = (): ServiceLocale | undefined => {
		let locales: ServiceLocale | undefined = undefined;

		loc.servicePage.categories.map(cat => {
			cat.services.map(service => {
				if (service.index === serviceId) {
					locales = service;
				}
			});
		});

		return locales;
	};

	enum Stages {
		NAME,
		CONTACTS,
		FINAL,
	}

	const [stage, setStage] = useState<Stages>(Stages.NAME);
	// Inputs
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [telegram, setTelegram] = useState<string>('');
	const [vk, setVk] = useState<string>('');
	// Errors
	const [isNameError, setIsNameError] = useState<boolean>(false);
	const [isEmailError, setIsEmailError] = useState<boolean>(false);
	const [isTgError, setIsTgError] = useState<boolean>(false);
	const [isVkError, setIsVkError] = useState<boolean>(false);

	const resetErrors = () => {
		setIsNameError(false);
		setIsEmailError(false);
		setIsTgError(false);
		setIsVkError(false);
	};

	// Reset errors when user is typing
	useEffect(() => {
		resetErrors();
	}, [name, email, telegram, vk]);

	const checkCorrect = (): boolean => {
		resetErrors();

		let nameError = false;
		let emailError = false;
		let tgError = false;
		let vkError = false;

		if (stage === Stages.NAME) {
			if (name === '') {
				setIsNameError(true);

				nameError = true;
			}
		}

		if (stage === Stages.CONTACTS) {
			// Email doesn`t match pattern
			if (email !== '' && !/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(email)) {
				setIsEmailError(true);
				emailError = true;
			}

			// Telegram doesn`t match pattern
			if (telegram !== '' && !/^@.+$/i.test(telegram)) {
				setIsTgError(true);
				tgError = true;
			}

			// Check if user didn`t provided any contact
			if (email === '' && telegram === '' && vk === '') {
				setIsEmailError(true);
				setIsTgError(true);
				setIsVkError(true);

				emailError = true;
				tgError = true;
				vkError = true;
			}
		}

		return !nameError && !emailError && !tgError && !vkError;
	};

	return (
		<Page
			meta={loc.meta.orderPage}
			header={{
				tabIndex: 0,
				renderNav: false,
				renderBackButton: true,
				renderRightButtons: false,
			}}
		>
			<div className={cn(styles.page)}>
				<div className={cn(styles.placeholder)}>
					<div className={cn(styles.form)}>
						<h2>{getLocales()?.name}</h2>

						{stage === Stages.NAME && (
							<section>
								<h3>{loc.orderPage.stages.name.label}</h3>

								<div className={cn(styles.orderInput)}>
									<input
										className={cn(
											styles.fullWidth,
											isNameError ? styles.withError : ''
										)}
										value={name}
										placeholder={loc.orderPage.stages.name.input.placeholder}
										onChange={event => setName(event.target.value)}
									/>
								</div>

								{(isEmailError || isTgError || isVkError || isNameError) && (
									<div className={cn(styles.error)}>{loc.orderPage.error}</div>
								)}
							</section>
						)}

						{stage === Stages.CONTACTS && (
							<section>
								<h3>{loc.orderPage.stages.contacts.label}</h3>

								<div className={cn(styles.orderInput)}>
									<div className={cn(styles.title)}>
										{loc.orderPage.stages.contacts.inputs.email.title}
									</div>

									<input
										className={cn(isEmailError ? styles.withError : '')}
										value={email}
										placeholder={
											loc.orderPage.stages.contacts.inputs.email.placeholder
										}
										onChange={event => setEmail(event.target.value)}
									/>
								</div>

								<div className={cn(styles.orderInput)}>
									<div className={cn(styles.title)}>
										{loc.orderPage.stages.contacts.inputs.telegram.title}
									</div>

									<input
										className={cn(isTgError ? styles.withError : '')}
										value={telegram}
										placeholder={
											loc.orderPage.stages.contacts.inputs.telegram.placeholder
										}
										onChange={event => setTelegram(event.target.value)}
									/>
								</div>

								<div className={cn(styles.orderInput)}>
									<div className={cn(styles.title)}>
										{loc.orderPage.stages.contacts.inputs.vk.title}
									</div>

									<input
										className={cn(isVkError ? styles.withError : '')}
										value={vk}
										placeholder={
											loc.orderPage.stages.contacts.inputs.vk.placeholder
										}
										onChange={event => setVk(event.target.value)}
									/>
								</div>

								{(isEmailError || isTgError || isVkError || isNameError) && (
									<div className={cn(styles.error)}>{loc.orderPage.error}</div>
								)}
							</section>
						)}

						{stage === Stages.FINAL && (
							<section>
								<h4>{loc.orderPage.stages.final[0]}</h4>
								<h4>{loc.orderPage.stages.final[1]}</h4>
								<h4>
									{loc.orderPage.stages.final[2].replace(/XX/gi, orderId)}
								</h4>
							</section>
						)}

						<div className={cn(styles.bottomControl)}>
							<div
								className={cn(
									styles.arrowButton,
									stage === Stages.NAME && styles.blocked,
									stage === Stages.FINAL && styles.blocked
								)}
								onClick={() => {
									setStage(prev => prev - 1);
									resetErrors();
								}}
							>
								<svg
									viewBox='0 0 30 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M29.0607 13.0607C29.6464 12.4749 29.6464 11.5251 29.0607 10.9393L19.5147 1.3934C18.9289 0.807611 17.9792 0.807611 17.3934 1.3934C16.8076 1.97919 16.8076 2.92893 17.3934 3.51472L25.8787 12L17.3934 20.4853C16.8076 21.0711 16.8076 22.0208 17.3934 22.6066C17.9792 23.1924 18.9289 23.1924 19.5147 22.6066L29.0607 13.0607ZM0 13.5H28V10.5H0V13.5Z' />
								</svg>
							</div>

							<motion.div
								initial={{
									opacity: stage === Stages.FINAL ? 1 : 0,
									pointerEvents: stage === Stages.FINAL ? 'all' : 'none',
								}}
								animate={{
									opacity: stage === Stages.FINAL ? 1 : 0,
									pointerEvents: stage === Stages.FINAL ? 'all' : 'none',
								}}
								transition={{
									duration: 0.15,
								}}
								whileTap={{
									filter: 'brightness(0.85)',
								}}
								className={cn(styles.okButton)}
								onClick={() => {
									navigate('/', {
										preventScrollReset: false,
									});
								}}
							>
								OK
							</motion.div>

							<div
								className={cn(
									styles.arrowButton,
									stage === Stages.FINAL && styles.blocked
								)}
								onClick={() => {
									if (checkCorrect()) {
										setStage(prev => prev + 1);
									}
								}}
							>
								<svg
									viewBox='0 0 30 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M29.0607 13.0607C29.6464 12.4749 29.6464 11.5251 29.0607 10.9393L19.5147 1.3934C18.9289 0.807611 17.9792 0.807611 17.3934 1.3934C16.8076 1.97919 16.8076 2.92893 17.3934 3.51472L25.8787 12L17.3934 20.4853C16.8076 21.0711 16.8076 22.0208 17.3934 22.6066C17.9792 23.1924 18.9289 23.1924 19.5147 22.6066L29.0607 13.0607ZM0 13.5H28V10.5H0V13.5Z' />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Page>
	);
};

export default OrderPage;
