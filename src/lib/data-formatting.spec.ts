import { describe, expect,it } from 'vitest';

import {
  getFullDate,
  getNumberOfNights,
  getShortDate,
} from './date-formatting';

describe('getFullDate', () => {
  it('should return correct format', () => {
    const value = new Date('12-12-2024');
    const expected = 'Thu 4th December 2024';
    const actual = getFullDate(value);

    expect(actual).toBe(expected);
  });

  it('should return todays date formated if no date is provided', () => {
    const value = new Date();
    const expected = getFullDate(value);
    const actual = getFullDate();

    expect(actual).toBe(expected);
  });
});

describe('getNumberOfNights', () => {
  it('should return correct difference in nights', () => {
    const startDate = new Date('12-14-2024');
    const endDate = new Date('12-12-2024');
    const expected = 2;
    const actual = getNumberOfNights(startDate, endDate);

    expect(actual).toBe(expected);
  });
});

describe('getShortDate', () => {
  it('should return correct short date', () => {
    const value = new Date('12-12-2024');
    const expected = 'December 12th, 2024';
    const actual = getShortDate(value);

    expect(actual).toBe(expected);
  });

  it('should return todays date formatted if not value is provided', () => {
    const value = new Date();
    const expected = getShortDate(value);
    const actual = getShortDate();

    expect(actual).toBe(expected);
  });
});
