import { IsNotEmpty } from "class-validator";


export class UserDTO {
    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    readonly password: string;
}

export class UserRO {
    id: string;
    created: Date;
    username: string;
    token?: string;
}

export class UserUO {
    username?: string;
    password?: string;
}