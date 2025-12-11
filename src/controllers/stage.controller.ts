import { createSessionService, getSessionsService } from "../services/stage.service";
import { Request, Response } from "express";

export const createNewSession = async (req: Request, res: Response)=>{
    try{
        const session = await createSessionService(req.body);
        res.json({message: "Success", session});
    } catch(err: any){
        if(err instanceof Error){
            return res.status(400).json({error: err.message});
        };
        return res.status(400).json({error: "Unknown Error"})
    }
};

export const getSessions = async (req: Request, res: Response) => {
    try{
        const id = Number(req.params.id)
        const sessions = await getSessionsService(id);
        res.json({message: "Success", sessions});
    } catch (err: any){
        if(err instanceof Error){
            return res.status(400).json({error: err.message});
        };
        return res.status(400).json({error: "Unknown Error"})
    }
}