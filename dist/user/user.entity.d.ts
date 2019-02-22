export declare class UserEntity {
    id: string;
    created: Date;
    username: string;
    password: string;
    hashPassword(): Promise<void>;
    toResponseObject(isShowToken?: boolean): Promise<any>;
    comparePassword(comparingPassword: string): Promise<boolean>;
    private readonly token;
}
