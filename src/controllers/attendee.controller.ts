import { createUserService } from '../services/attendees.service';
import { Request, Response } from 'express';

export const registerAttendeeController = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body);
        res.json({ message: "Success", user});
    } catch (err: unknown) {
        if (err instanceof Error){
            return res.status(400).json({error: err.message});
        }
        return res.status(400).json({error: "Unknown Error"});
    }
};