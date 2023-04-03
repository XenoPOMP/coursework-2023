import { describe, expect, test } from 'vitest';
import skipTestCondition from '@utils/skipTestCondition';
import ArgumentError from '@errors/ArgumentError';

describe.skipIf(skipTestCondition('FRONTEND'))('ArgumentError handling', () => {
  test('Error is being thrown', () => {
    expect(() => {
      throw new ArgumentError(`123`);
    }).toThrowError(ArgumentError);
  });
});
