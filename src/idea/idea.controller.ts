import { Controller, Get, Post, Put, Delete, Body, Param, HttpException, HttpStatus, UsePipes, Logger } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { ValidationPipe } from 'src/shared/validation.pipe';

@Controller('api/idea')
export class IdeaController {
    private logger = new Logger('IdeaController');

    constructor(private ideaService: IdeaService) {}

    @Get()
    async showAllIdeas() {
        try {
            return await this.ideaService.getAllIdeas();
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createNewIdea(@Body() data: IdeaDTO) {
        try {
            this.logger.log(JSON.stringify(data));
            return await this.ideaService.createAnIdea(data);            
        } catch (e) {
            throw new HttpException(e, HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id')
    async readAnIdea(@Param('id') id: string) {
        try {
            const idea = await this.ideaService.getOneIdea(id);
            if (!idea) {
                throw new HttpException('Not found', HttpStatus.NOT_FOUND);
            }
            return idea;
        } catch (e) {
            throw new HttpException(e, HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async updateAnIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        try {
            const idea = await this.ideaService.updateAnIdea(id, data);
            if (!idea) {
                throw new HttpException('Not found', HttpStatus.NOT_FOUND);
            }
            return idea;
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':id')
    async deleteAnIdea(@Param('id') id: string) {
        try {
            return await this.ideaService.destroyAnIdea(id);
        } catch (error) {
            throw new HttpException(error, HttpStatus.BAD_REQUEST);
        }
    }
}
