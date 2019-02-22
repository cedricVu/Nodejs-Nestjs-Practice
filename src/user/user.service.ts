import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import * as Bcrypt from 'bcryptjs';
import * as JWT from 'jsonwebtoken';
import { UserRO } from './user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}
    
    async showAll() {
        return await this.userRepository.find({
            select: ['id', 'username', 'created']
        });
    }

    async login(username: string, password: string) {
        let user = await this.userRepository.findOne({
            where: {
                username
            }
        });
        if (!user) {
            throw new HttpException('Not found user', HttpStatus.NOT_FOUND);
        }
        if (!user.comparePassword(password)) {
            throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
        }
        return user.toResponseObject(true);
    }

    async register(username: string, password: string) {
        const user = await this.userRepository.create({ username, password });
        await this.userRepository.save(user);
        return user.toResponseObject();
    }

}
