import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  nameFirst: z.boolean().optional(),
  nameLast: z.boolean().optional(),
  password: z.boolean().optional(),
  salt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
}).strict()

export default UserSelectSchema;
