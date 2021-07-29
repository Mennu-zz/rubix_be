import { User, UserAddress } from "../db/models";

// type withOutUserIdsAndBeFields = "id" | "creationDate" | "updatedAt" | "password" | "role" | "blocked" | "provider" | "addresses";

// export interface ProfileResponse extends Omit<User, withOutUserIdsAndBeFields> {
//     addresses: Omit<UserAddress, "userId">[]
// }

//export type ProfileAddress = Pick<UserAddress, "id"|"addressLine1"|"addressLine2"|"city"|"state"|"country"|"phone"|"title">;

export interface ProfileAddress {
    id: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    phone: string;
    title: string;
}

export interface ProfileSchema {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    confirmed: boolean;
    addresses: ProfileAddress[];
};

export type ProfileWithoutAddress = Omit<ProfileSchema, "addresses">;


export interface ProfileResponse {
    data: ProfileSchema
}

export interface ProfileAddressResponse {
    data: ProfileAddress[]
}

export interface CreateProfileAddressResponse {
    data: ProfileAddress
}