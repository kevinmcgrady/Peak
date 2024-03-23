import { describe, expect,it } from 'vitest';

import { calculateFee, formatCurrency } from './number-formatting';

describe('calculateFee', () => {
  it('should return 3% of value', () => {
    const value = 12;
    const expected = 0.36;
    const actual = calculateFee(value);

    expect(actual).toBe(expected);
  });
});

describe('formatCurrency', () => {
  it('should return a price formatted in GBP', () => {
    const value = 25;
    const expected = '£25.00';
    const actual = formatCurrency(value);

    expect(actual).toBe(expected);
  });
});
