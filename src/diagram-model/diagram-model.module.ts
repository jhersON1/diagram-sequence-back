import { Module } from '@nestjs/common';
import { DiagramModelService } from './diagram-model.service';
import { DiagramModelController } from './diagram-model.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  DiagramModel,
  DiagramModelSchema,
} from './entities/diagram-model.entity';

@Module({
  controllers: [DiagramModelController],
  providers: [DiagramModelService],
  imports: [
    MongooseModule.forFeature([
      {
        name: DiagramModel.name,
        schema: DiagramModelSchema,
      },
    ]),
  ],
})
export class DiagramModelModule {}
