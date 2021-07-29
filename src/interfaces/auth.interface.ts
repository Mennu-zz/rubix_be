export interface signinBody {
    email: string;
    password: string;
}

export interface signUpResponse {
    token: string;
}

export interface verifyResponse {
    data: {
        valid: boolean;
    }
}