import { inject } from "inversify";
import { controller, httpGet, httpPost, queryParam, requestBody } from "inversify-express-utils";
import TYPES from "../../constants/types";
import { User } from '../../db/models/user';
import { signinBody, signUpResponse, verifyResponse } from "../../interfaces/auth.interface";
import { AuthService } from "./auth.service";

@controller('/api/auth')
export class AuthController {

    constructor(@inject(TYPES.AuthService) private service: AuthService) {}

    @httpPost('/signup')
    public async signup(@requestBody() payload: User): Promise<signUpResponse> {
        return await this.service.signup(payload);
    }

    @httpPost('/signin')
    public async signin(@requestBody() payload: signinBody): Promise<signUpResponse> {
        return await this.service.signin(payload);
    }

    @httpGet('/verify')
    public async verify(@queryParam('email') email: string): Promise<verifyResponse> {
        return await this.service.verify(email);
    }
    
}