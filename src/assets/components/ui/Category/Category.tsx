import cn from 'classnames';
import { FC } from 'react';

import ServiceBadge from '@ui/ServiceBadge/ServiceBadge';

import useLocalization from '@hooks/useLocalization';

import styles from './Category.module.scss';
import { CategoryProps } from './Category.props';

const Category: FC<CategoryProps> = ({ index }) => {
	const loc = useLocalization();
	const categoryLocales = loc.servicePage.categories[index];

	return (
		<div className={cn(styles.category)}>
			<h2>{categoryLocales.title}</h2>

			<div className={cn(styles.itemGroup)}>
				{categoryLocales.services.map((service, index) => (
					<ServiceBadge locales={service} key={`service-badge-${index}`} />
				))}
			</div>
		</div>
	);
};

export default Category;
