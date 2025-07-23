import { z } from 'zod';

export const UserOrderByRelevanceFieldEnumSchema = z.enum(['email','nameFirst','nameLast','password','salt']);

export default UserOrderByRelevanceFieldEnumSchema;
