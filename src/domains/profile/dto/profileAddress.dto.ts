import { UserAddress } from "../../../db/models/userAddress";
import { CreateProfileAddressResponse, ProfileAddressResponse } from "../../../interfaces/profile.interface";

export class ProfileAddress {

    static mapAddress({ id = '', addressLine1, addressLine2, city, state, country, phone, title }: UserAddress) {
        return {
            id, addressLine1, addressLine2, city, state, country, phone, title,
        };
    }

    static toDTO(addresses: UserAddress[]): ProfileAddressResponse {
        return {
            data: addresses.map(ProfileAddress.mapAddress),
        };
    }

    static toCreateDTO(address: UserAddress): CreateProfileAddressResponse {
        return {
            data: ProfileAddress.mapAddress(address)
        };
    }
}

