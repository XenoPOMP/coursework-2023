import { FC, ReactNode } from 'react';
import Helmet from 'react-helmet';

import Layout from '@components/Layout/Layout';

import type { HeaderProps } from '@ui/Header/Header.props';

import useAppSettings from '@hooks/useAppSettings';

import { PageProps } from './Page.props';
import type { MetaInfo } from './Page.props';

/**
 * Component that provides page implementation.
 * Meta tag optimization included.
 *
 * @param {MetaInfo} meta            page meta info.
 * @param {ReactNode} children       page children component.
 * @param {HeaderProps} header       header render settings.
 * @constructor
 */
const Page: FC<PageProps> = ({ meta, children, header }) => {
	const { language } = useAppSettings();

	return (
		<Layout header={header}>
			<Helmet
				htmlAttributes={{
					lang: language.get(),
				}}
			>
				<title>{meta.pageTitle}</title>
				<meta name={'description'} content={meta.pageDescription} />
				<meta name={'keywords'} content={meta.keywords} />
			</Helmet>
			{children}
		</Layout>
	);
};

export default Page;
