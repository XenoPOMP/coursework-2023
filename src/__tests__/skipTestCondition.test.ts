import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import useEnv from '@hooks/useEnv';

const { TESTING_MODE } = useEnv();

describe.skipIf(skipTestCondition('FRONTEND') || TESTING_MODE === 'FULLSTACK')(
  'Skip test condition',
  () => {
    test('Condition is frontend', () => {
      const isSkip = skipTestCondition('FRONTEND');

      expect(isSkip).toBe(false);
    });

    test('Condition is backend', () => {
      const isSkip = skipTestCondition('BACKEND');

      expect(isSkip).toBe(true);
    });
  },
);
