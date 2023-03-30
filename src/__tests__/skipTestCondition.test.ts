import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';

describe('Skip test condition', () => {
  test.skipIf(skipTestCondition('FRONTEND'))('Condition is frontend', () => {
    const isSkip = skipTestCondition('FRONTEND');

    expect(isSkip).toBe(false);
  });

  test.skipIf(skipTestCondition('BACKEND'))('Condition is backend', () => {
    const isSkip = skipTestCondition('BACKEND');

    expect(isSkip).toBe(true);
  });

  test('Condition is', () => {
    expect();
  });
});
