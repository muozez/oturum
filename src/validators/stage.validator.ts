import { z } from 'zod';

export const validateSessions = z.object({
    _id: z.number(),
    title: z.string(),
    speaker: z.string(),
    startTime: z.date(),
    endTime: z.date(),
    isActive: z.boolean(),
    qrSecurityToken: z.string()
});