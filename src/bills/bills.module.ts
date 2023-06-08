import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsResolver } from './bills.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bill } from './bills.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bill])],
  providers: [BillsService, BillsResolver],
})
export class BillsModule {}
