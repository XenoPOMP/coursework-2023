import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';
import { HeaderProps } from '@ui/Header/Header.props';

export interface PageProps extends SimpleReactComponent {
  meta: {
    pageTitle: string,
    pageDescription?: string,
    keywords: string,
  };

  header: HeaderProps;
}
