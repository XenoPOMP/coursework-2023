export interface DashboardCardProps {
  index: number;
  query: string;
  labels?: {
    data?: string;
    title?: string;
  };
  isDate: boolean;
}
