import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaDTO } from './idea.dto';

@Injectable()
export class IdeaService {
    constructor(@InjectRepository(IdeaEntity) private readonly ideaRepository: Repository<IdeaEntity>) {}

    getAllIdeas():  Promise<IdeaEntity[]> {
        return this.ideaRepository.find();
    }

    getOneIdea(id: string): Promise<IdeaEntity> {
        return this.ideaRepository.findOne({
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

    updateAnIdea(id: string, data: Partial<IdeaDTO>) {
        return this.ideaRepository.update(
            {
                id
            },
            data
        );
    }

    destroyAnIdea(id: string) {
        return this.ideaRepository.delete({ id });
    }
}
