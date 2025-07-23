import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id','email','nameFirst','nameLast','password','salt','createdAt','updatedAt']);

export default UserScalarFieldEnumSchema;
