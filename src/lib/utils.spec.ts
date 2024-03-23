import { describe, expect, it, vi } from 'vitest';

import { absoluteUrl, cn } from './utils';

describe('absoluteUrl', () => {
  it('should return path as window is not undefined', () => {
    const value = '/about';
    const actual = absoluteUrl(value);

    expect(actual).toBe(value);
  });

  it('should return production URL', () => {
    vi.stubEnv('VERCEL_URL', 'www.prod.com');
    vi.stubGlobal('window', undefined);

    const value = '/about';
    const expected = `https://www.prod.com${value}`;
    const actual = absoluteUrl(value);

    expect(actual).toBe(expected);
  });

  it('should return development url', () => {
    vi.stubEnv('VERCEL_URL', '');
    vi.stubGlobal('window', undefined);

    const value = '/about';
    const expected = `http://localhost:3000${value}`;
    const actual = absoluteUrl(value);

    expect(actual).toBe(expected);
  });

  it('should return development URL is PORT is set', () => {
    vi.stubEnv('VERCEL_URL', '');
    vi.stubEnv('PORT', '8080');
    vi.stubGlobal('window', undefined);

    const value = '/about';
    const expected = `http://localhost:8080${value}`;
    const actual = absoluteUrl(value);

    expect(actual).toBe(expected);
  });
});

describe('cn', () => {
  it('should return classnames as string', () => {
    const value = ['bg-white', 'px-2', 'mb-4'];
    const expected = 'bg-white px-2 mb-4';
    const actual = cn(value);

    expect(actual).toBe(expected);
  });
});
