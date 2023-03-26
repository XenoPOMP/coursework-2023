import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';

export interface PageProps extends SimpleReactComponent {
  meta: {
    pageTitle: string,
    pageDescription?: string,
    keywords: string,
  };
}
