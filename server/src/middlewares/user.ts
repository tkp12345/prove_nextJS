import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";
import {User} from "../entities/User";

export class NoUserError extends Error {
  constructor(message:string) {
    super(message);
    this.name = 'NoUserError'
  }
}

export default async (req:Request, res:Response, next:NextFunction) => {
  try {
    const token = req.cookies.token;
    if(!token) return next();

    const {username}:any = jwt.verify(token, process.env.JWT_SECRET!);

    const user = await User.findOneBy({username});

    if(!user) return new NoUserError('Unauthenticated');

    // res.local.user에 user 정보 넣어주기 (이렇게 넣어두면 나중에 local에 접근해서 user 정보를 사용할 수 있다.)
    res.locals.user = user

    return next()
  }catch (error){
    console.log(error);
    return res.status(400).json({error:'something went wrong!'})
  }
}