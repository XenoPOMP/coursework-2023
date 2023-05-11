import cn from 'classnames';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { isFirefox } from 'react-device-detect';

import RunningLine from '@ui/RunningLine/RunningLine';

import numericGenerator from '@utils/numericGenerator';

import styles from './Patch.module.scss';
import { PatchProps } from './Patch.props';

const Patch: FC<PatchProps> = ({}) => {
	const scrollSpeed = 8;

	const AnimatedLine = (): JSX.Element => {
		return (
			<RunningLine
				direction={'up'}
				className={cn(styles.patch)}
				scrollSpeed={scrollSpeed}
				scrollDelay={0}
			>
				<div className={cn(styles.content)}>
					{numericGenerator(70).map(key => (
						<span className={cn(styles.word)} key={`patch-element-${key}`}>
							smartace{' '}
						</span>
					))}
				</div>
			</RunningLine>
		);
	};

	const StaticLine = (): JSX.Element => {
		return (
			<motion.div
				initial={{
					y: '50%',
				}}
				className={cn(styles.patch)}
			>
				<div className={cn(styles.content)}>
					{numericGenerator(70).map(key => (
						<span className={cn(styles.word)} key={`patch-element-${key}`}>
							smartace{' '}
						</span>
					))}
				</div>
			</motion.div>
		);
	};

	return (
		<>
			<BrowserView>
				{!isFirefox ? <AnimatedLine /> : <StaticLine />}
			</BrowserView>

			<MobileView>
				<StaticLine />
			</MobileView>
		</>
	);
};

export default Patch;
