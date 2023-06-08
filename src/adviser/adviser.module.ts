import { Module } from '@nestjs/common';
import { AdviserService } from './adviser.service';
import { AdviserResolver } from './adviser.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Adviser } from './adviser.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Adviser])],
  providers: [AdviserService, AdviserResolver],
})
export class AdviserModule {}
