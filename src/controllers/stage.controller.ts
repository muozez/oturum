import { createSessionService } from "../services/stage.service";
import { Request, Response } from "express";

export const createNewSession = async (req: Request, res: Response)=>{
    try{
        const session = await createSessionService(req.body);
        res.json({message: "Success", session});
    } catch(err: any){
        if(err instanceof Error){
            return res.status(400).json({error: err.message});
        };
        return res.status(400).json({message: "Unknown Error"})
    }
}