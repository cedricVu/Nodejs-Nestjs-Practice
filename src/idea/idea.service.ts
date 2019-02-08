import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaDTO } from './idea.dto';

@Injectable()
export class IdeaService {
    constructor(@InjectRepository(IdeaEntity) private readonly ideaRepository: Repository<IdeaEntity>) {}

    async getAllIdeas():  Promise<IdeaEntity[]> {
        return await this.ideaRepository.find();
    }

    async getOneIdea(id: string): Promise<IdeaEntity> {
        return await this.ideaRepository.findOne({
            where: {
                id
            }
        });
    }

    async createAnIdea(data: IdeaDTO): Promise<any> {
        const idea = await this.ideaRepository.create(data);
        await this.ideaRepository.save(idea);
        return idea;
    }

    async updateAnIdea(id: string, data: Partial<IdeaDTO>) {
        return await this.ideaRepository.update(
            {
                id
            },
            data
        );
    }

    async destroyAnIdea(id: string) {
        return await this.ideaRepository.delete({ id });
    }
}
