import Logger from '../../utils/logger';

declare global{
   namespace Express {
       interface Request {
         log: typeof Logger,
         user: Record<string, string | number>,
       }
   }
}