export class NewUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: boolean;
    age: number;
    imageUrl: string;
    //addresses: IAddress[];

    constructor(user: any) {
        this.id = user.login.uuid;
        this.firstName = user.name.first;
        this.lastName = user.name.last;
        this.email = user.email;
        this.gender = user.gender === 'male' ? true : false;
        this.age = user.dob.age;
        this.imageUrl = user.picture.large;
        //this.addresses = {}
/*         .addressLine = user.location.street;
        this.addresses.city = user.location.city,
        this.addresses.zip = user.location.postcode
 */

    }

}