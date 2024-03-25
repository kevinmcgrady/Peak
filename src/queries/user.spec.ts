import { User } from '@clerk/nextjs/server';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { getLoggedInUser, syncUser } from './user';

afterEach(() => {
  vi.restoreAllMocks();
});

vi.mock('@clerk/nextjs', async () => {
  return {
    currentUser: vi.fn().mockResolvedValue({
      emailAddresses: [{ emailAddress: 'test@example.com' }],
      firstName: 'John',
      lastName: 'Doe',
    }),
  };
});

vi.mock('../lib/db', () => ({
  db: {
    user: {
      findUnique: vi.fn().mockResolvedValue(null),
      create: vi.fn().mockResolvedValue({}),
    },
  },
}));

describe('syncUser', () => {
  it('syncUser function should synchronize user data from authentication system to the database', async () => {
    const userMock = await import('@clerk/nextjs');
    const dbMock = (await import('../lib/db')).db.user;

    const findUniqueSpy = vi.spyOn(dbMock, 'findUnique');
    const createSpy = vi.spyOn(dbMock, 'create');

    await syncUser();

    expect(userMock.currentUser).toBeCalledTimes(1);

    expect(dbMock.findUnique).toBeCalledTimes(1);

    expect(findUniqueSpy).toBeCalledWith({
      where: { emailAddress: 'test@example.com' },
    });

    expect(dbMock.create).toBeCalledTimes(1);

    expect(createSpy).toBeCalledWith({
      data: { emailAddress: 'test@example.com', name: 'John Doe' },
    });
  });

  it('syncUser function should do nothing if user already exists', async () => {
    const dbMock = (await import('../lib/db')).db.user;

    vi.spyOn(dbMock, 'findUnique').mockResolvedValueOnce({
      id: '1',
      emailAddress: 'test@gmail.com',
      name: 'John Doe',
    });

    await syncUser();

    expect(dbMock.create).not.toHaveBeenCalled();
  });
});

describe('getLoggedInUser', () => {
  it('should return null if no logged in user', async () => {
    const userMock = await import('@clerk/nextjs');
    vi.spyOn(userMock, 'currentUser').mockResolvedValue(null);

    const user = await getLoggedInUser();

    expect(userMock.currentUser).toBeCalledTimes(1);

    expect(user).toBe(null);
  });

  it('getLoggedInUser function should return null if user does not exist', async () => {
    const dbMock = (await import('../lib/db')).db.user;

    vi.spyOn(dbMock, 'findUnique').mockResolvedValueOnce(null);

    const user = await getLoggedInUser();
    expect(user).toBeNull();
  });

  it('should return user if user is logged in', async () => {
    const dbMock = (await import('../lib/db')).db.user;
    const userMock = await import('@clerk/nextjs');

    vi.spyOn(userMock as any, 'currentUser').mockResolvedValue({
      emailAddresses: [{ emailAddress: 'example@example.com' }],
    });

    vi.spyOn(dbMock, 'findUnique').mockResolvedValue({
      emailAddress: '',
      id: '',
      name: '',
    });

    const user = await getLoggedInUser();

    expect(user).toEqual({
      emailAddress: '',
      id: '',
      name: '',
    });
  });
});
