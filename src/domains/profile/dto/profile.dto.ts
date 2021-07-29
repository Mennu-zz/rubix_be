import { User } from "../../../db/models";
import { ProfileResponse, ProfileAddress } from "../../../interfaces/profile.interface";

export class Profile {
    static toDTO({ 
        firstName, 
        lastName, 
        email,
        phone,
        addresses,
        confirmed
     }: User): ProfileResponse {
        let transformedAddresses: ProfileAddress[] = []
        if (addresses) {
            transformedAddresses = addresses.map(({ id = '', addressLine1, addressLine2, city, state, country, phone, title }): ProfileAddress => {
                return {
                    id, addressLine1, addressLine2, city, state, country, phone, title
                };
            })
        }
        return {
            data : {
                firstName,
                lastName,
                email,
                phone,
                confirmed,
                addresses: transformedAddresses
            }
        }
    }
}