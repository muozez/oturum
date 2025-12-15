import { createUserService } from '../services/user.service';
import RegistrationToken from '../models/RegistrationToken.model'
import { Request, Response } from 'express';

export const registerUserController = async (req: Request, res: Response) => {
    const validToken = await RegistrationToken.findOne({token: req.body.qrToken});
    if (!validToken){
        return res.status(403).json({error: "QR Expired"})
    }
    try {
        const newUser = await createUserService({
            ...req.body,
            registrationMethod: 'qr_scan'
        });
        res.json({ message: "Success", newUser});
    } catch (err: unknown) {
        if (err instanceof Error){
            return res.status(400).json({error: err.message});
        }
        return res.status(400).json({error: "Unknown Error"});
    }
};