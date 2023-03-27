import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';
import { HeaderProps } from '@ui/Header/Header.props';

export type MetaInfo = {
  pageTitle: string,
  pageDescription?: string,
  keywords: string,
};

export interface PageProps extends SimpleReactComponent {
  meta: MetaInfo;

  header: HeaderProps;
}
