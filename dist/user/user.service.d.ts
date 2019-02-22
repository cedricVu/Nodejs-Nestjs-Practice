import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    showAll(): Promise<UserEntity[]>;
    login(username: string, password: string): Promise<any>;
    register(username: string, password: string): Promise<any>;
}
