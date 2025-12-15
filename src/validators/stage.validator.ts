import { z } from 'zod';

export const validateSessions = z.object({
    title: z.string(),
    speaker: z.string(),
    startTime: z.string(),
    endTime: z.string(),
});