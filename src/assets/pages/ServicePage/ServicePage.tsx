import cn from 'classnames';
import { Transition, motion } from 'framer-motion';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Page from '@components/Page/Page';
import ServiceArticle from '@components/ServiceArticle/ServiceArticle';

import { changeServiceSearch } from '@redux/reducers/serviceListSlice';
import IStore from '@redux/types/redux-types';

import Category from '@ui/Category/Category';
import Patch from '@ui/Patch/Patch';
import MediaWidthView from '@ui/mediaQueries/MediaWidthView/MediaWidthView';

import useLocalization from '@hooks/useLocalization';
import useServiceId from '@hooks/useServiceId';

import styles from './ServicePage.module.scss';
import { ServicePageProps } from './ServicePage.props';

const ServicePage: FC<ServicePageProps> = ({}) => {
	const loc = useLocalization();
	const serviceId = useServiceId();
	const [params, setParams] = useSearchParams();

	const searchString: string = useSelector(
		(state: IStore) => state.serviceList.search
	);
	const dispatch = useDispatch();

	const mobileAnimationTransition: Transition = {
		duration: 0.35,
		ease: serviceId !== -1 ? 'easeOut' : 'easeIn',
	};

	return (
		<Page
			meta={loc.meta.servicePage.initial}
			header={{
				tabIndex: 1,
			}}
		>
			<MediaWidthView minWidth={852}>
				<div className={cn(styles.page)}>
					<section className={cn(styles.serviceList)}>
						<div className={cn(styles.searchPlaceholder)}>
							<div className={cn(styles.inputLine)}>
								<svg
									className={cn(styles.search)}
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M13.8333 15L8.58333 9.75C8.16667 10.0833 7.6875 10.3472 7.14583 10.5417C6.60417 10.7361 6.02778 10.8333 5.41667 10.8333C3.90278 10.8333 2.62167 10.3092 1.57333 9.26083C0.524444 8.21194 0 6.93056 0 5.41667C0 3.90278 0.524444 2.62139 1.57333 1.5725C2.62167 0.524167 3.90278 0 5.41667 0C6.93056 0 8.21194 0.524167 9.26083 1.5725C10.3092 2.62139 10.8333 3.90278 10.8333 5.41667C10.8333 6.02778 10.7361 6.60417 10.5417 7.14583C10.3472 7.6875 10.0833 8.16667 9.75 8.58333L15 13.8333L13.8333 15ZM5.41667 9.16667C6.45833 9.16667 7.34389 8.80222 8.07333 8.07333C8.80222 7.34389 9.16667 6.45833 9.16667 5.41667C9.16667 4.375 8.80222 3.48944 8.07333 2.76C7.34389 2.03111 6.45833 1.66667 5.41667 1.66667C4.375 1.66667 3.48944 2.03111 2.76 2.76C2.03111 3.48944 1.66667 4.375 1.66667 5.41667C1.66667 6.45833 2.03111 7.34389 2.76 8.07333C3.48944 8.80222 4.375 9.16667 5.41667 9.16667Z' />
								</svg>

								<input
									placeholder={loc.servicePage.searchPlaceholder}
									value={searchString}
									onChange={event => {
										dispatch(changeServiceSearch(event.target.value));
									}}
								/>

								<div
									className={cn(styles.closeButton)}
									onClick={() => {
										dispatch(changeServiceSearch(''));
									}}
								>
									<svg
										className={cn(styles.close)}
										width='15'
										height='15'
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M2.20711 14.2929C1.81658 14.6834 1.18342 14.6834 0.792893 14.2929L0.707107 14.2071C0.316583 13.8166 0.316583 13.1834 0.707107 12.7929L5.29289 8.20711C5.68342 7.81658 5.68342 7.18342 5.29289 6.79289L0.707107 2.20711C0.316583 1.81658 0.316582 1.18342 0.707107 0.792893L0.792893 0.707107C1.18342 0.316583 1.81658 0.316583 2.20711 0.707107L6.79289 5.29289C7.18342 5.68342 7.81658 5.68342 8.20711 5.29289L12.7929 0.707107C13.1834 0.316583 13.8166 0.316583 14.2071 0.707107L14.2929 0.792893C14.6834 1.18342 14.6834 1.81658 14.2929 2.20711L9.70711 6.79289C9.31658 7.18342 9.31658 7.81658 9.70711 8.20711L14.2929 12.7929C14.6834 13.1834 14.6834 13.8166 14.2929 14.2071L14.2071 14.2929C13.8166 14.6834 13.1834 14.6834 12.7929 14.2929L8.20711 9.70711C7.81658 9.31658 7.18342 9.31658 6.79289 9.70711L2.20711 14.2929Z'
											fill='#939393'
										/>
									</svg>
								</div>
							</div>
						</div>

						{loc.servicePage.categories.map((cat, index) => (
							<Category index={index} key={`category-${index}`} />
						))}
					</section>

					<section className={cn(styles.patch)}>
						<Patch />
					</section>

					<section className={cn(styles.body)}>
						<ServiceArticle />
					</section>
				</div>
			</MediaWidthView>

			<MediaWidthView maxWidth={852}>
				<div className={cn(styles.page, styles.mobile)}>
					<section className={cn(styles.serviceList)}>
						<div className={cn(styles.searchPlaceholder)}>
							<div className={cn(styles.inputLine)}>
								<svg
									className={cn(styles.search)}
									width='15'
									height='15'
									viewBox='0 0 15 15'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M13.8333 15L8.58333 9.75C8.16667 10.0833 7.6875 10.3472 7.14583 10.5417C6.60417 10.7361 6.02778 10.8333 5.41667 10.8333C3.90278 10.8333 2.62167 10.3092 1.57333 9.26083C0.524444 8.21194 0 6.93056 0 5.41667C0 3.90278 0.524444 2.62139 1.57333 1.5725C2.62167 0.524167 3.90278 0 5.41667 0C6.93056 0 8.21194 0.524167 9.26083 1.5725C10.3092 2.62139 10.8333 3.90278 10.8333 5.41667C10.8333 6.02778 10.7361 6.60417 10.5417 7.14583C10.3472 7.6875 10.0833 8.16667 9.75 8.58333L15 13.8333L13.8333 15ZM5.41667 9.16667C6.45833 9.16667 7.34389 8.80222 8.07333 8.07333C8.80222 7.34389 9.16667 6.45833 9.16667 5.41667C9.16667 4.375 8.80222 3.48944 8.07333 2.76C7.34389 2.03111 6.45833 1.66667 5.41667 1.66667C4.375 1.66667 3.48944 2.03111 2.76 2.76C2.03111 3.48944 1.66667 4.375 1.66667 5.41667C1.66667 6.45833 2.03111 7.34389 2.76 8.07333C3.48944 8.80222 4.375 9.16667 5.41667 9.16667Z' />
								</svg>

								<input
									placeholder={loc.servicePage.searchPlaceholder}
									value={searchString}
									onChange={event => {
										dispatch(changeServiceSearch(event.target.value));
									}}
								/>

								<div
									className={cn(styles.closeButton)}
									onClick={() => {
										dispatch(changeServiceSearch(''));
									}}
								>
									<svg
										className={cn(styles.close)}
										width='15'
										height='15'
										viewBox='0 0 15 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M2.20711 14.2929C1.81658 14.6834 1.18342 14.6834 0.792893 14.2929L0.707107 14.2071C0.316583 13.8166 0.316583 13.1834 0.707107 12.7929L5.29289 8.20711C5.68342 7.81658 5.68342 7.18342 5.29289 6.79289L0.707107 2.20711C0.316583 1.81658 0.316582 1.18342 0.707107 0.792893L0.792893 0.707107C1.18342 0.316583 1.81658 0.316583 2.20711 0.707107L6.79289 5.29289C7.18342 5.68342 7.81658 5.68342 8.20711 5.29289L12.7929 0.707107C13.1834 0.316583 13.8166 0.316583 14.2071 0.707107L14.2929 0.792893C14.6834 1.18342 14.6834 1.81658 14.2929 2.20711L9.70711 6.79289C9.31658 7.18342 9.31658 7.81658 9.70711 8.20711L14.2929 12.7929C14.6834 13.1834 14.6834 13.8166 14.2929 14.2071L14.2071 14.2929C13.8166 14.6834 13.1834 14.6834 12.7929 14.2929L8.20711 9.70711C7.81658 9.31658 7.18342 9.31658 6.79289 9.70711L2.20711 14.2929Z'
											fill='#939393'
										/>
									</svg>
								</div>
							</div>
						</div>

						{loc.servicePage.categories.map((cat, index) => (
							<Category index={index} key={`category-${index}`} />
						))}
					</section>

					<section className={cn(styles.patch)}>
						<Patch />
					</section>

					<motion.section
						initial={{
							x: serviceId !== -1 ? 0 : '100%',
						}}
						animate={{
							x: serviceId !== -1 ? 0 : '100%',
						}}
						transition={mobileAnimationTransition}
						className={cn(styles.body)}
					>
						<ServiceArticle />
					</motion.section>
				</div>
			</MediaWidthView>
		</Page>
	);
};

export default ServicePage;
