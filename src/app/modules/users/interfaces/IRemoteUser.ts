export interface IRemoteUserName {
            title: string,
            first: string,
            last: string,
}

export interface IRemoteUserLogin {
            uuid: string,
            username: string,
            password: string,
            salt: string,
            md5: string,
            sha1: string,
            sha256: string,
}

export interface IRemoteUserDob {
    date: Date,
    age: number,
}

export interface IRemoteUserPicture {
    large: string,
    medium: string,
    thumbnail: string,
}

export interface IRemoteUserStreet {
    number: number,
    name: string,
}

export interface IRemoteUserLocation {
    street: IRemoteUserStreet,
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: object,
    timezone: object,
}


export interface IRemoteUser {
        gender: string,
        name: IRemoteUserName,
        email: string,
        login: IRemoteUserLogin,
        dob: IRemoteUserDob,
        picture: IRemoteUserPicture,
        location: IRemoteUserLocation,
}