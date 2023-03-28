import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';

export interface SelectButtonProps
  extends Pick<SimpleReactComponent, 'children'> {
  isTriggered: boolean;
  onClick: () => void;
}
