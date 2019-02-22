import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    showAllUsers(): Promise<import("./user.entity").UserEntity[]>;
    login(data: UserDTO): Promise<any>;
    register(data: UserDTO): Promise<any>;
    updateUser(id: string, data: UserDTO): Promise<void>;
}
