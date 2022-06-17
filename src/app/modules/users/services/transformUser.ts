import { IAddress } from "../interfaces/IAddress";

export class NewUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: boolean;
    age: number;
    imageUrl: string;
    addresses: IAddress[];

    constructor(user: any) {
        this.id = user.login.uuid;
        this.firstName = user.name.first;
        this.lastName = user.name.last;
        this.email = user.email;
        this.gender = user.gender === 'male' ? true : false;
        this.age = user.dob.age;
        this.imageUrl = user.picture.large;
        this.addresses = [{
            addressLine: `${user.location.street.number} ${user.location.street.name}`,
            city: user.location.city,
            zip: user.location.postcode
        }]
    }

    getNewUser() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            gender: this.gender,
            age: this.age,
            imageUrl: this.imageUrl,
            addresses: this.addresses,
        }
    }
}