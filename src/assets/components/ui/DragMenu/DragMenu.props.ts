import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';

export interface DragMenuProps extends SimpleReactComponent {
  classNames?: {
    constraint?: string,
    draggable?: string,
  };
  axis: 'x' | 'y';
}
