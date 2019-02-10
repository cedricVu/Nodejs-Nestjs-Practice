import { IsString, MaxLength } from "class-validator";

export class IdeaDTO {
    @IsString()
    readonly idea: string;

    @IsString()
    readonly description: string;
}