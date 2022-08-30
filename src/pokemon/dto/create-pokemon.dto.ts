import {IsInt, IsPositive, Min, MinLength, IsString} from 'class-validator';

export class CreatePokemonDto {
    @IsInt()
    @IsPositive()
    @Min(1)
    num: number;

    @IsString()
    @MinLength(1)
    name: string;
}
