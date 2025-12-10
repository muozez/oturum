import { Request, Response, NextFunction } from "express";

interface CustomError {
    status?: number;
    message?: string;
    errors?: any;
}

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    const status = err.status || 500;
    const response: any = { error: err.message || "Internal Server Error"};
    if (err.errors) response.errors = err.errors;
    res.status(status).json(response)
}