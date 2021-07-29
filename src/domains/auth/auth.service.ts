import { injectable } from "inversify";
import { User } from "../../db/models/user";
import { signinBody, signUpResponse, verifyResponse } from "../../interfaces/auth.interface";
import { AuthSignUp } from './auth.signup.dto';
import createHttpError from 'http-errors';
import { createHash } from 'crypto';

@injectable()
export class AuthService {

    public async signup(payload: User): Promise<signUpResponse> {
        try {
            const newUser = await User.create({ 
                ...payload,
                role: 'customer',
                blocked: false,
                confirmed: false,
                provider: 'direct',
            });
            return AuthSignUp.toDTO(newUser);
        } catch (err) {
            throw new createHttpError.BadRequest();
        }
    }

    public async signin({ email, password }: signinBody): Promise<signUpResponse> {
        const user = await User.findOne({ where: { email } });
        const pwd = createHash('sha256').update(password).digest('hex')
        if(user?.password === pwd) {
            return AuthSignUp.toDTO(user);
        } else {
            throw new createHttpError.BadRequest();
        }
    }

    public async verify(email: string): Promise<verifyResponse> {
        const user = await User.findOne({ where: { email } });
        let valid = true;
        if (!user) {
            valid = false;
        }
        return {
            data: {
                valid 
            }
        }
    }

}