import { injectable } from "inversify";
import { User, UserAddress } from "../../db/models/index";
import { Profile } from "./dto/profile.dto";
import { ProfileAddress } from "./dto/profileAddress.dto";
import createHttpError from 'http-errors';
import { ProfileResponse, ProfileAddressResponse, CreateProfileAddressResponse } from "../../interfaces/profile.interface";

@injectable()
export class ProfileService {
    public async getProfile(userId: string): Promise<ProfileResponse> {
        try {
            const user = await User.findOne({ where: { id: userId }, include: [{ model: UserAddress }] });
            if (user) {
                return Profile.toDTO(user);
            } else {
                throw new createHttpError.NotFound('User Not Found');
            }
        } catch (error) {
            console.log(error)
            throw new createHttpError.InternalServerError();
        }
    }

    public async updateProfile(id: string, userProperties: User): Promise<boolean> {
        try {
            const user = await User.update({ ...userProperties }, { where: { id } });
            if (user[0] > 0) {
                return true;
            }
            throw new createHttpError.NotFound();
        } catch (error) {
            throw new createHttpError.InternalServerError()
        }
    };

    public async getAddress(id: string): Promise<ProfileAddressResponse> {
        try {
            const addresses = await UserAddress.findAll({ where: { createdBy: id } });
            return ProfileAddress.toDTO(addresses);
        } catch (error) {
            throw new createHttpError.InternalServerError();
        }
    }

    public async createAddress(userAddress: UserAddress): Promise<CreateProfileAddressResponse> {
        try {
            const address = await UserAddress.create(userAddress);
            return ProfileAddress.toCreateDTO(address);
        } catch (error) {
            throw new createHttpError.InternalServerError();
        }
    }

    public async deleteAddressById(id: string, uid: string): Promise<boolean> {
        try {
            const address = await UserAddress.destroy({ where: { id, createdBy: uid } });
            if (address > 0) {
                return true;
            }
            throw new createHttpError.NotFound();
        } catch (error) {
            throw new createHttpError.InternalServerError();
        }
    }

}