import { Repository } from 'typeorm';
import { IdeaEntity } from './idea.entity';
import { IdeaDTO } from './idea.dto';
export declare class IdeaService {
    private readonly ideaRepository;
    constructor(ideaRepository: Repository<IdeaEntity>);
    getAllIdeas(): Promise<IdeaEntity[]>;
    getOneIdea(id: string): Promise<IdeaEntity>;
    createAnIdea(data: IdeaDTO): Promise<any>;
    updateAnIdea(id: string, data: Partial<IdeaDTO>): Promise<import("typeorm").UpdateResult>;
    destroyAnIdea(id: string): Promise<import("typeorm").DeleteResult>;
}
