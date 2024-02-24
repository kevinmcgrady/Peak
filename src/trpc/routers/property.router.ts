import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import { db } from '~/lib/db';

import { publicProcedure, router } from '../trpc';

export const propertyRouter = router({});
