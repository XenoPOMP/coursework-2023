import { CSSProperties } from 'react';

type MaxWidth = number | 'unset';

export type GridSettings = {
  cols?: number;
  rows?: number;
  gap?: number;
  maxWidth?: MaxWidth;
};

const getUiSx = (gridSettings: GridSettings): CSSProperties => {
  const {
    cols,
    rows,
    maxWidth,
    gap
  } = gridSettings;

  const getMaxWidth = (): string | undefined => {
    if (maxWidth === undefined) return undefined;

    if (maxWidth === 'unset') return maxWidth;

    return `${maxWidth}px`;
  }

  return {
    '--cols': cols ? cols : 5,
    '--rows': rows ? rows : 1,
    '--gap': gap !== undefined ? `${gap}px` : '20px',
    '--max-width' : getMaxWidth() ? getMaxWidth() : '1920px'
  } as CSSProperties;
};

export default getUiSx;