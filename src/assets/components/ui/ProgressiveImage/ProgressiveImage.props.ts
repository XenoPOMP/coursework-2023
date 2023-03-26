import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';

export interface ProgressiveImageProps
  extends Pick<SimpleReactComponent, 'className'> {
  src?: string;
  alt?: string;
  loaderColorScheme: {
    backgroundColor: string,
    loaderColor: string,
  };
}
