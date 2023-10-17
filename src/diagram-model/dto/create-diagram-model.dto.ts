import { IsArray, IsString, MinLength, ValidateNested } from 'class-validator';
import { CreateNodeDto } from './create-node.dto';
import { CreateLinkDto } from './create-link.dto';
import { Type } from 'class-transformer';

export class CreateDiagramModelDto {
  @IsString()
  userId: string;

  @IsString()
  @MinLength(1)
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateNodeDto)
  nodes: CreateNodeDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLinkDto)
  links: CreateLinkDto[];
}
