import { createTokenService } from "../services/token.service";
import { Request, Response } from "express";
import { ENV } from "../config/dotenv";

export const createToken = async (req: Request, res: Response) => {
    try {
        const redirect = await createTokenService(ENV.URL);
        res.status(200).json({url: redirect})
    } catch(err) {
        if (err instanceof Error){
            return res.status(400).json({error: err.message});
        };
        return res.status(400).json({error: "Unknown Error"})
    }
}