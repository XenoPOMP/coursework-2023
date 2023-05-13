import cn from 'classnames';
import { FC } from 'react';

import ExternalLink, {
	ExternalRouterLink,
} from '@ui/ExternalLink/ExternalLink';

import styles from './ChangelogTab.module.scss';
import { ChangelogTabProps } from './ChangelogTab.props';

const ChangelogTab: FC<ChangelogTabProps> = ({}) => {
	return (
		<div>
			<ExternalLink href={'/settings'}>some link</ExternalLink>
		</div>
	);
};

export default ChangelogTab;
