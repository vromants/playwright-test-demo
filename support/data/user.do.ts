export class UserDo {
    constructor(
        readonly username: string,
        readonly password = 'secret_sauce'
    ) {}
}

export const standardUser = new UserDo('standard_user');
export const lockedOutUser = new UserDo('locked_out_user');
