import { z, ZodError, ZodSchema, ZodIssue } from 'zod';
import { Request, Response, NextFunction } from "express";

export const validate = (schema: ZodSchema<any>)=>{
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch(err: any){
            if (err instanceof ZodError){
                const errors = err.issues.map(e => ({
                    path: e.path.join('.'),
                    message: e.message
                }))
                return res.status(400).json({errors})
            }
            return res.status(500).json({error: "Internal Server Error"})
        }
    }
}