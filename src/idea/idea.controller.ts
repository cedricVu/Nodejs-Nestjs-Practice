import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';

@Controller('idea')
export class IdeaController {

    constructor(private ideaService: IdeaService) {}

    @Get()
    showAllIdeas() {
        return this.ideaService.getAllIdeas();
    }

    @Post()
    createNewIdea(@Body() data: IdeaDTO) {
        return this.ideaService.createAnIdea(data);
    }

    @Get(':id')
    readAnIdea(@Param('id') id: string) {
        return this.ideaService.getOneIdea(id);
    }

    @Put(':id')
    updateAnIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        return this.ideaService.updateAnIdea(id, data);
    }

    @Delete(':id')
    deleteAnIdea(@Param('id') id: string) {
        return this.ideaService.destroyAnIdea(id);
    }
}
