import { SimpleReactComponent } from '@interfaces/SimpleReactComponent';

export interface RunningLineProps extends SimpleReactComponent {
	behavior?: 'scroll' | 'slide' | 'alternate';
	direction?: 'left' | 'right' | 'up' | 'down';
	loop?: boolean;
	scrollSpeed?: number;
	scrollDelay?: number;
	verticalAlign?: boolean;
}
