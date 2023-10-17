import { PartialType } from '@nestjs/mapped-types';
import { CreateDiagramModelDto } from './create-diagram-model.dto';

export class UpdateDiagramModelDto extends PartialType(CreateDiagramModelDto) {}
