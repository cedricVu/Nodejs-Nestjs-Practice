import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
export declare class IdeaController {
    private ideaService;
    private logger;
    constructor(ideaService: IdeaService);
    showAllIdeas(): Promise<import("./idea.entity").IdeaEntity[]>;
    createNewIdea(data: IdeaDTO): Promise<any>;
    readAnIdea(id: string): Promise<import("./idea.entity").IdeaEntity>;
    updateAnIdea(id: string, data: Partial<IdeaDTO>): Promise<import("typeorm").UpdateResult>;
    deleteAnIdea(id: string): Promise<import("typeorm").DeleteResult>;
}
