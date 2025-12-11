import { createSessionService, getSessionsService, patchSessionService } from "../services/stage.service";
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
};

export const patchSessions = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const updated = await patchSessionService(req.body, id);
        res.status(200).json({message: "Success", updated});
    } catch (err: any) {
        if(err instanceof Error){
            return res.status(400).json({error: err.message});
        };
        return res.status(400).json({error: "Unknown Error"})
    }
}