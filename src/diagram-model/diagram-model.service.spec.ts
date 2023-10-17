import { Test, TestingModule } from '@nestjs/testing';
import { DiagramModelService } from './diagram-model.service';

describe('DiagramModelService', () => {
  let service: DiagramModelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagramModelService],
    }).compile();

    service = module.get<DiagramModelService>(DiagramModelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
