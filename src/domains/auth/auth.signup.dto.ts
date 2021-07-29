import { User } from '../../db/models/user';
import { signUpResponse } from '../../interfaces/auth.interface';
import { JWT } from '../../utils/jwt';

export class AuthSignUp {
    static toDTO({ id = '', firstName, role }: User): signUpResponse {
        return {
            token: JWT.generateToken({ id, firstName, role }),
        }
    }
}