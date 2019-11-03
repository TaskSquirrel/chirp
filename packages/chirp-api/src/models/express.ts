import { Collection } from "mongodb";
import { Request, Response } from "express";

export type RequestHandlerDB<P = any, S = any> = (
    req: Request,
    res: Response,
    collection: Collection<P>,
    optional?: Collection<S>
) => Promise<any> | void;

export interface ResponseSchema {
    status: "OK" | "error";
    error?: string;

    message?: string;

    [key: string]: any;
}
