import { Args, Resolver, Query } from '@nestjs/graphql';
import { AdviserService } from './adviser.service';
import { Adviser } from './adviser.entity';

@Resolver()
export class AdviserResolver {
  constructor(private adviserService: AdviserService) {}

  @Query((returns) => [Adviser])
  advisers() {
    return this.adviserService.findAll();
  }

  @Query((returns) => Adviser)
  getAdviser(@Args('id', { type: () => Number }) id: number) {
    return this.adviserService.findOneById(id);
  }
}
