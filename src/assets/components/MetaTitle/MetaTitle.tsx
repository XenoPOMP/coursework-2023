import { FC } from 'react';
// @ts-ignore
import DocumentMeta from 'react-document-meta';

import { MetaTitleProps } from './MetaTitle.props';

/**
 * Adds meta tags to head filled with your data.
 *
 * @deprecated Template uses new type of meta tag insertion.
 *
 * @param {string} pageTitle              title of the page that is being shown
 *                                        in browser tab.
 *
 * @param {string} [pageDescription]      description of page in
 *                                        search engine.
 *
 * @param {string} keywords               keywords for better indexing the
 *                                        page by search engines.
 * @constructor
 */
const MetaTitle: FC<MetaTitleProps> = ({
	pageTitle,
	pageDescription,
	keywords,
}) => {
	const meta = {
		title: pageTitle,
		description: pageDescription,
		meta: {
			charset: 'utf-8',
			name: {
				keywords: keywords,
			},
		},
	};

	return <DocumentMeta {...meta}></DocumentMeta>;
};

export default MetaTitle;
