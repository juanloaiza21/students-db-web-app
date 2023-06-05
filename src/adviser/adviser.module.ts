import { Module } from '@nestjs/common';
import { AdviserService } from './adviser.service';
import { AdviserResolver } from './adviser.resolver';

@Module({
  providers: [AdviserService, AdviserResolver]
})
export class AdviserModule {}
