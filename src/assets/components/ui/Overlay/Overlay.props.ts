import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';

export interface OverlayProps extends Omit<SimpleReactComponent, 'sx'> {
  backdrop: {
    blurAmount?: number,
    blurColor?: string,
  };
  trigger: boolean;
  flexCenter?: boolean;
}
