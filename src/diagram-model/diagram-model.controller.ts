import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiagramModelService } from './diagram-model.service';
import { CreateDiagramModelDto } from './dto/create-diagram-model.dto';
import { UpdateDiagramModelDto } from './dto/update-diagram-model.dto';

@Controller('diagram-model')
export class DiagramModelController {
  constructor(private readonly diagramModelService: DiagramModelService) {}

  @Post()
  create(@Body() createDiagramModelDto: CreateDiagramModelDto) {
    return this.diagramModelService.create(createDiagramModelDto);
  }

  @Get()
  findAll() {
    return this.diagramModelService.findAll();
  }

  @Get('name/:userId')
  findName(@Param('userId') userId: string) {
    return this.diagramModelService.findName(userId);
  }

  @Get(':userId')
  findByUserId(@Param('userId') userId: string) {
    return this.diagramModelService.findByUserId(userId);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiagramModelDto: UpdateDiagramModelDto,
  ) {
    return this.diagramModelService.update(+id, updateDiagramModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagramModelService.remove(+id);
  }
}
