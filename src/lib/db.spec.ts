// db.test.js
import { PrismaClient } from '@prisma/client';
import { describe, expect, test } from 'vitest';

import { db } from './db';

describe('db', () => {
  test('db object should be initialized properly', () => {
    expect(db !== undefined);

    expect(db instanceof PrismaClient);
  });

  test('db object should be accessible globally', () => {
    expect(globalThis.prisma !== undefined); //eslint-disable-line
    expect(globalThis.prisma === db); //eslint-disable-line
  });
});
