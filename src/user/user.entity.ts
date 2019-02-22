import { Entity, Column, PrimaryColumn, CreateDateColumn, BeforeInsert, PrimaryGeneratedColumn } from "typeorm";
import * as Bcrypt from 'bcryptjs';
import * as Jwt from 'jsonwebtoken';
import { UserRO } from "./user.dto";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @CreateDateColumn()
    created: Date;

    @Column({
        type: 'text',
        unique: true
    })
    username: string;

    @Column('text')
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await Bcrypt.hash(this.password, 10);
    }

    toResponseObject(isShowToken: boolean = false): UserRO {
        const { id, username, created } = this;
        const responseObject: any = { id, username, created };

        if (isShowToken) {
            responseObject.token = this.token;
        }
        return responseObject;
    }

    async comparePassword(comparingPassword: string) {
        return await Bcrypt.compare(comparingPassword, this.password);
    }

    private get token() {
        return Jwt.sign(
            {
                username: this.username,
                id: this.id
            },
            process.env.JWT_SECRET_KEY
        )
    }
}