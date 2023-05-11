import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';

import { HeaderProps } from '@ui/Header/Header.props';

export interface LayoutProps extends SimpleReactComponent {
	header: HeaderProps;
}
