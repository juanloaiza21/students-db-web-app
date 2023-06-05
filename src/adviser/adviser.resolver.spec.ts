import { Test, TestingModule } from '@nestjs/testing';
import { AdviserResolver } from './adviser.resolver';

describe('AdviserResolver', () => {
  let resolver: AdviserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdviserResolver],
    }).compile();

    resolver = module.get<AdviserResolver>(AdviserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
