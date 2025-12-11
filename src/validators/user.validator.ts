import { z } from 'zod';

export const validateUsers = z.object({
    name: z.string(),
    surName: z.string(),
    email: z.email(),
    telephone: z.string().regex(/^[0-9]{10,11}$/, "invalid phone number"),
    metadata: z.object({
        department: z.string().optional(),
        grade: z.string().optional(),
    }).optional()
});