import { Test, TestingModule } from '@nestjs/testing';
import { DiagramModelController } from './diagram-model.controller';
import { DiagramModelService } from './diagram-model.service';

describe('DiagramModelController', () => {
  let controller: DiagramModelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiagramModelController],
      providers: [DiagramModelService],
    }).compile();

    controller = module.get<DiagramModelController>(DiagramModelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
