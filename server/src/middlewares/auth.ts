import {NextFunction, Request, Response} from "express";
import {User} from "../entities/User";
import {NoUserError} from "./user";


export default async (req:Request, res:Response, next:NextFunction) => {
    try {
        const user :User | undefined = res.locals.user;

        if(!user) return new NoUserError('Unauthenticated')

        return next()
    }catch (error){
        console.log(error);
        return res.status(401).json({error:'Unauthenticated'})
    }
}