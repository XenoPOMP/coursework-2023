export interface EndlessTimerProps {
  name?: string;
  callback: () => void;
  interval: number;
}
