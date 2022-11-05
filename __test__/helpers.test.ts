import { describe, expect, test } from '@jest/globals';
import { getRandomOfSix } from '../utils';

describe('testGetRandomSix', () => {
  test('to be a number', () => {
    const randomOfSix = getRandomOfSix();
    expect(Number.isNaN(randomOfSix * 1)).toBe(false);
  });
  test('to be between 1 and 6', () => {
    const randomOfSix = getRandomOfSix();
    expect(randomOfSix).toBeGreaterThanOrEqual(1);
    expect(randomOfSix).toBeLessThanOrEqual(6);
  });
});
