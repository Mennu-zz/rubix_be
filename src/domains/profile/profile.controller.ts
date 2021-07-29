import { inject } from "inversify";
import { controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import { ProfileService } from "./profile.service";
import TYPES from "../../constants/types";
import { Request } from "express";
import { verify } from "../../middleware/jwt";
import { User, UserAddress } from "../../db/models";
import { ProfileAddressResponse, CreateProfileAddressResponse, ProfileResponse } from "../../interfaces/profile.interface";

@controller('/api/profile', verify)
export class ProfileController {

    constructor(@inject(TYPES.ProfileService) private service: ProfileService) {}

    @httpGet('/')
    public async getProfile(req: Request): Promise<ProfileResponse> {
        return await this.service.getProfile(req.user.id as string);
    }
    
    @httpPut('/')
    public async updateProfile(@requestBody() payload: User, req: Request): Promise<void> {
        const userId = req.user.id;
        await this.service.updateProfile(userId as string, payload);
    }

    @httpGet('/address')
    public async getAddress(req: Request): Promise<ProfileAddressResponse> {
        const userId = req.user.id;
        return await this.service.getAddress(userId as string);
    }

    @httpPost('/address')
    public async createAddress(@requestBody() payload: UserAddress, req: Request): Promise<CreateProfileAddressResponse> {
        payload['createdBy'] = req.user.id as string ; 
        return await this.service.createAddress(payload);
    }

    @httpDelete('/address/:id')
    public async deleteAddressById(@requestParam('id') id: string, req: Request): Promise<any> {
        const userId = req.user.id as string;
        await this.service.deleteAddressById(id, userId);
    }

}