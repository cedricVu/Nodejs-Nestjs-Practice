import { Controller, Post, Get, Put, HttpException, HttpStatus, Body, UsePipes, Param, Guard, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO, UserRO, UserUO } from './user.dto';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { AuthGuard } from 'src/shared/auth.guard';
import { User } from './user.decorater';

@Controller()
export class UserController {

    constructor(private userService: UserService) {}

    @Get('/api/users')
    @UseGuards(new AuthGuard())
    async showAllUsers(@User() user): Promise<UserDTO[]> {
        console.log(user);
        try {
            const users = await this.userService.showAll();
            return users;
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('/login')
    @UsePipes(new ValidationPipe())
    async login(@Body() data: UserDTO): Promise<UserRO> {
        try {
            const { username, password } = data;
            const user = await this.userService.login(username, password);
            return user;
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
    
    @Post('register')
    @UsePipes(new ValidationPipe())
    async register(@Body() data: UserDTO): Promise<UserRO> {
        try {
            const { username, password } = data;
            const user = await this.userService.register(username, password);
            return user;
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Put()
    @UsePipes(new ValidationPipe())
    async updateUser(@Param(':id') id: string, @Body() data: UserUO) {
        try {
            const { username, password } = data;
            
            if (password) {
                
            }
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
