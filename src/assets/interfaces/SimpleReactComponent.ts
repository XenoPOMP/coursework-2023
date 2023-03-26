import { CSSProperties, ReactNode } from 'react';

export interface SimpleReactComponent {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}
