import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateDiagramModelDto } from './dto/create-diagram-model.dto';
import { UpdateDiagramModelDto } from './dto/update-diagram-model.dto';
import { Model } from 'mongoose';
import { DiagramModel } from './entities/diagram-model.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DiagramModelService {
  constructor(
    @InjectModel(DiagramModel.name)
    private readonly diagramModel: Model<DiagramModel>,
  ) {}
  async create(createDiagramModelDto: CreateDiagramModelDto) {

    createDiagramModelDto.name = createDiagramModelDto.name.toLowerCase();
    try {
      const diagramModel = await this.diagramModel.create(
        createDiagramModelDto,
      );

      return diagramModel;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(
        `Cannot create model - check server logs`,
      );
    }
  }

  findAll() {
    return `This action returns all diagramModel`;
  }

  async findName(userId: string) {
    let diagramModel = {};

    diagramModel = await this.diagramModel.find({ userId: userId }, 'name');
    return diagramModel;
  }

  async findByUserId(userId: string) {
    let diagramModel = {};

    diagramModel = await this.diagramModel.find({ userId: userId });
    return diagramModel;
  }
  update(id: number, updateDiagramModelDto: UpdateDiagramModelDto) {
    return `This action updates a #${id} diagramModel`;
  }

  remove(id: number) {
    return `This action removes a #${id} diagramModel`;
  }
}
