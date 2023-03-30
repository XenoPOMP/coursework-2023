import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import renderWithProviders, { RenderOptions } from '@utils/renderWithProviders';
import RunningLine from '@ui/RunningLine/RunningLine';

describe.skipIf(skipTestCondition('FRONTEND'))('Running line', () => {
  test('Match snapshot', () => {
    expect(renderWithProviders(<RunningLine />)).toMatchSnapshot();
  });

  test('True speed', () => {
    renderWithProviders(<RunningLine scrollDelay={10} />);

    const element = document.querySelector('marquee');

    expect(element).toBeDefined();
    expect(element?.getAttribute('truespeed')).toBeDefined();
  });

  test('Scroll delay', () => {
    renderWithProviders(<RunningLine scrollDelay={65} />);

    const element = document.querySelector('marquee');

    expect(element).toBeDefined();
    expect(element?.getAttribute('scrolldelay')).toBeDefined();
  });
});
