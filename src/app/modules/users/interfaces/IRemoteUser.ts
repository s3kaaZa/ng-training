export interface IRemoteUser {
        gender: string,
        name: {
            title: string,
            first: string,
            last: string,
        },
        email: string,
        login: {
            uuid: string,
            username: string,
            password: string,
            salt: string,
            md5: string,
            sha1: string,
            sha256: string,
        },
        dob: {
            date: Date,
            age: number,
        },
        picture: {
            large: string,
            medium: string,
            thumbnail: string,
    }
}

export interface IQwer {
    [key: string]: any;
  }