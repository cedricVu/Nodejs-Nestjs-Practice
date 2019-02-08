import { Controller, Get, Post, Param, Body, Put, Res } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { identity } from 'rxjs';

@Controller('cats')
export class CatsController {
    @Get()
    findAll() {
        return 'This action returns all cats'
    }

    @Post()
    createCat(@Res() res, @Body() createCatDto: CreateCatDto) {
        return 'This action is creating a cat'
    }

    @Get(':id')
    findOne(@Param('id') id) {
        return 'This action return cat with id = ' + id

    }

    @Put(':id')
    update(@Param('id') id, @Body() updateCatDto) {
        return 'This action is update one cat'
    }

    @Get(':name')
    findOneByName(@Param() params) {
        const name = params.name;
        return 'This action get cat by name = ' + name
    }

    @Get()
    async getAll(): Promise<any[]> {
        return []
    }
}
