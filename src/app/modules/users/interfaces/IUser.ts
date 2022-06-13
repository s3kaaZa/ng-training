import { IAddress } from "./IAddress";

export interface IUser {
    id: string | null,
    firstName: string,
    lastName: string,
    email: string,
    companyName: string,
    department: string,
    gender: boolean,
    age: number,
    imageUrl: string,
    addresses: IAddress[] | undefined,
}