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
                return next(({ status: 400, message: "Validation failed", errors }))
            }
            return next(({ status: 500, message: "Internal Server Error" }))
        }
    }
}