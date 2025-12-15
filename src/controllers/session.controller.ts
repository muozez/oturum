import { verifyScanService } from "../services/session.service";
import { Request, Response } from "express";

export const verifyScan = async (req: Request, res: Response) => {
    try{
        const response = await verifyScanService(req.body);
        res.status(200).json({message: "Success", response})
    } catch(err){
        if (err instanceof Error){
            return res.status(400).json({error: err.message});
        };
        return res.status(400).json({error: "Unknown Error"})
    }
}