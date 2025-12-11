import { z } from 'zod';

export const validateSessions = z.object({
    _id: z.number(),
    title: z.string(),
    speaker: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    isActive: z.boolean()
});