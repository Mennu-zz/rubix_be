import { NextFunction, Request, Response } from 'express';
import Logger from '../utils/logger';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.log = Logger.instance.child({req});
    next();
}

export default loggerMiddleware;