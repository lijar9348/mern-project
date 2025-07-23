import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  nameFirst: z.string().optional().nullable(),
  nameLast: z.string().optional().nullable(),
  password: z.string(),
  salt: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default UserUncheckedCreateInputSchema;
