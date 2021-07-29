import { Request, Response, NextFunction } from 'express';
import { JWT } from '../utils/jwt';
import createHttpError from 'http-errors';

export const verify = (req: Request, res: Response, next: NextFunction) => {
    const { headers } = req;
    const authToken = headers["x-access-token"] as string;
    if(authToken) {
        JWT.validateToken(authToken).then(data => {
            req.user = data;
            next();
        }).catch(err => {
            next(new createHttpError.BadRequest());
        });
    } else {
        next(new createHttpError.Unauthorized());
    }
}